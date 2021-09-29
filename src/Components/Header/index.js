import React, {useEffect,  useState} from 'react'
import { getAuth, signOut} from 'firebase/auth';
import { useHistory , Link} from "react-router-dom";
import './index.css'

const Header = ()=>{
    let history = useHistory()
    const [ status, setStatus ] = useState(false)


const logout = ()=>{
        signOut(auth)
            .then(() => {
                localStorage.removeItem('token')
                alert("logout successful")
                history.push("/") 
            })
            .catch((e) => alert(e.message))
    }


  const login = () => {
      history.push("/login")
  }  


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setStatus(true)    
        }else if (!token){
            setStatus(false)
        }
    },[logout])

    const auth = getAuth();

    return(
        <nav className="nav-header">
        <div className="nav-content">
        <div className="nav-logo-container">
        <h1 className="website-logo">
                  Y 
              </h1>
              <div className="nav-menu-container">
              <Link to="/" className="Link">
              <h1 className="navheading">
                  Hacker News
              </h1>
               </Link>
          </div>
            <ul className="nav-menu ">
              <Link to="/new" className="Link">
              <li className="nav-menu-item">
                  new  
              </li>
              </Link>
              <li className="nav-menu-item">|</li>
              <Link  className="Link" to="/past">
              <li className="nav-menu-item">
                  past 
              </li>
              </Link>
              <li className="nav-menu-item">
                  |
              </li>
              <li className="nav-menu-item">
                  comments
              </li>
              <li className="nav-menu-item">
                  |
              </li>
              <li className="nav-menu-item">
                  ask
              </li>
              <li className="nav-menu-item">
                  |
              </li>
              <li className="nav-menu-item">
                  show 
              </li>
              <li className="nav-menu-item">
                  |
              </li>
              <li className="nav-menu-item">
                  jobs 
              </li>
              <li className="nav-menu-item">
                  |
              </li>
              <Link to="/submit" className="Link">
              <li className="nav-menu-item">
                  submit
              </li>
              </Link>
            <li>
            {status ?
             <button
               className="logout-mobile-btn"
              onClick={logout}
            >
              Logout
            </button>: <button
               className="logout-mobile-btn"
              onClick={login}
            >
              Login
            </button>
             
            }
            </li>
            </ul>
            </div>
            {status ?
             <button
              className="logout-desktop-btn"
              onClick={logout}
            >
              Logout
            </button>: <button
              className="logout-desktop-btn"
              onClick={login}
            >
              Login
            </button>
             
            }
          </div>
      </nav>
    )
}

export default Header