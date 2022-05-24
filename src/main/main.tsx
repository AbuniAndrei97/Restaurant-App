import './main.css'
import { useAuth } from '../config/firebase';
import { useEffect } from 'react'

export const Main = () => {

    useEffect(() => {
    document.title = "Home"
  }, [])

  const currentUser = useAuth();


  return (
    <div className = "main">
        <h1>Bine ati venit la Internet Massive Movie Database (IMMDB).</h1>
        {currentUser?
          <>
            <h2>Acum sunteti conectat.</h2>
          </>
            :
          <>
            <h2>Pentru a vedea restul paginilor trebuie sa fiti autentificat.</h2>
          </>
          }
        

    </div>
  );
}
