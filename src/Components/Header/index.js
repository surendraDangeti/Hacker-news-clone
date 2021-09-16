import React, {useEffect,  useState} from 'react'
import { getAuth, signOut} from 'firebase/auth';
import { useHistory , Link} from "react-router-dom";
import './index.css'

const Header = ()=>{
    let history = useHistory()

const logout = ()=>{
        signOut(auth)
            .then(() => {
                localStorage.removeItem('token')
                history.push('/')
            })
            .catch((e) => alert(e.message))
    }


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            history.push('/')
       
          
        }
    },[])

    const auth = getAuth();

    return(
        <nav className="nav-header">
        <div className="nav-content">
        <div className="nav-logo-container">
        <h1 className="website-logo">
                  Y 
              </h1>
              <div className="nav-menu-container">
              <Link to="/home" className="Link">
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
              <li className="nav-menu-item">
                  |
              </li>
              <li className="nav-menu-item">
                  past 
              </li>
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
            <button
              className="logout-mobile-btn"
              onClick={logout}
            >
              Logout
            </button>
            </li>
            </ul>
            </div>
             <button
              className="logout-desktop-btn"
              onClick={logout}
            >
              Logout
            </button>
          </div>
      </nav>
    )
}

export default Header