import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { useAuth } from '../config/firebase';


export const Header = () => {
    const currentUser = useAuth();
    const navigate = useNavigate();
  
    const Logout = () => {
     auth.signOut()
     .then(() => navigate('/'))
     .catch(error => console.log(error));
    }
   
    return (
    <header>
<nav>

<ul id="meniu">
    <li>
    <div className="meniureal"><Link to = "/">Acasa</Link></div>
        
    </li>
    <li>
    <div className="meniureal"><Link to = "/filme">Filme</Link></div>
    </li>
    <li>
    {currentUser?
      <>
        <div className="meniureal"><Link to = "/profile" className = 'meniureal'>Profil</Link></div>
      </>
        :
      <>
        <div className="meniureal"><Link to = "/login" className = 'meniureal'>Login</Link></div>
      </>
      }
    
        
    </li>
    <li>
    {currentUser?
      <>
        <div className="meniureal" onClick={() => Logout()}>Log Out</div>
      </>
        :
      <>
        <div className="meniureal"><Link to = "/register" className = 'meniureal'>Register</Link></div>
      </>
      }
    </li>
</ul>
</nav>

 </header>

  );
    }