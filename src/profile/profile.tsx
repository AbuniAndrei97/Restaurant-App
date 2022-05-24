import './profile.css'
import { useAuth } from '../config/firebase';
import { useEffect } from 'react'

export const Profile = () => {

    useEffect(() => {
    document.title = "Profil"
  }, [])

    const currentUser = useAuth();

  return (
      <h2 className='profile'>Mail-ul de pe acest cont este: {currentUser.email}</h2>
  );
}