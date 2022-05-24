import './filme.css'
import { useAuth } from '../config/firebase';
import { useEffect } from 'react'

export const Filme = () => {

    useEffect(() => {
    document.title = "Filme"
  }, [])

    const currentUser = useAuth();

  return (
    <div className = "clasa">
    {currentUser?
      <>
      <div className="strange">Doctor Strange in the Multiverse of Madness</div>
      <img className="strangeposter" src="https://nerdist.com/wp-content/uploads/2021/01/DoctorStrangeInTheMultiverseOfMadness_Teaser2_Printed_1-Sht_v4_lg.jpg" alt="sssstrange"/>
      <div className="spider">Spider-Man: No Way Home</div>
      <img className="spiderposter" src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg" alt="sspiderman"/>
      <div className="hulk">The Incredible Hulk</div>
      <img className="hulkposter" src="https://movieposters2.com/images/649720-b.jpg" alt="hhulk"/>
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