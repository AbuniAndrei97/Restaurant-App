import './registerForm.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../config/firebase';
import { ErrorText } from '../ErrorText/errortext';
import { useEffect } from 'react'


export const RegisterForm = () => {

    useEffect(() => {
    document.title = "RegisterForm"
  }, [])

  const [register, setRegister] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const signUpWithEmailAndPassword = () => {
    if (error !== '') setError('');

    setRegister(true);

    auth.createUserWithEmailAndPassword(email, password)
    .then(result => {
      console.log(result);
      navigate('/');
    })
    .catch(error => {
        console.log(error);

        if (error.code.includes('auth/weak-password'))
        {
          setError('Foloseste o parola mai puternica.');
        } else if (error.code.includes('auth/email-already-in-use'))
        {
          setError('E-mail deja folosit.');
        } else
        {
          setError('Unable to register. Please try again later. (probably invalid mail)');
        }

        setRegister(false);
    });
  }


  return (
    <div className = "registerform">
      <h1 className = "registertitle">Register</h1>
        <form method = "post">
          <div className = "text_field">
              <label className="placeholder">E-mail: </label>
            <input
              className="input"
              type = "email"
              required
              onChange = {event => setEmail(event.target.value)}
              value = {email} />
            
          </div>
          
          <div className = "text_field">
          <label className="placeholder">Parola: </label>
            <input
              className="input"
              autoComplete = "new-password"
              type = "password"
              required
              onChange = {event => setPassword(event.target.value)}
              value = {password} />
            
          </div>
          <button
              className="submit"
              disabled = {register}
              onClick = {() => signUpWithEmailAndPassword()}>
                    Register
          </button>
          <div className = 'login_link'>
            <p className = 'login_text'>Ai deja un cont?
              <Link to = "/login" className = 'link'> Log in!</Link>
            </p>
          </div>
          <ErrorText error = {error} />
        </form>
    </div>
  );
}
