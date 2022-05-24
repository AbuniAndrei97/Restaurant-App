import './loginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../config/firebase';
import { ErrorText } from '../ErrorText/errortext';
import { useEffect } from 'react'

export const LoginForm = () => {

  useEffect(() => {
    document.title = "Login"
  }, [])

  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const signInWithEmailAndPassword = () => {

    if (error !== '') setError('');

    setAuthenticating(true);

    auth.signInWithEmailAndPassword(email, password)
    .then(result => {
      console.log(result);
      navigate('/');
    })
    .catch(error => {
      console.log(error);
      setAuthenticating(false);

      if (error.code.includes('auth/invalid-email'))
      {
        setError('Mail invalid');
      } else if (error.code.includes('auth/wrong-password'))
      {
        setError('Parola gresita');
      } else
      {
        setError('Unable to login. Please try again later.');
      }
    })
  }

  return (

    <div className = "loginform">
      <h1 className = "logintitle">Login</h1>
        <form method = "post">
          <div className = "text_field">
            <input
              className="input"
              type="email"
              required
              onChange = {event => setEmail(event.target.value)}
              value = {email}
            />
            <div className="cut"></div>
            <label className="placeholder">E-mail:</label>
          </div>
          <div className = "text_field">
            <input
              className="input"
              autoComplete = "new-password"
              type="password"
              required
              onChange = {event => setPassword(event.target.value)}
              value = {password}
            />
            <div className="cut"></div>
            <label className="placeholder">Parola:</label>
          </div>
          <button
            className="submit"
            disabled = {authenticating}
            onClick = {() => signInWithEmailAndPassword()}
          >
            Login
          </button>
          <div className = 'signup_link'>
            <p className = 'signup_text'>Nu ai cont?
              <Link to = "/register" className = 'link'> Register!</Link>
            </p>
          </div>
          <ErrorText error = {error} />
        </form>
    </div>
  );
}
