import React, {useState} from 'react'
import { useHistory, Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import "./index.css"

const Login = () => {
    let history = useHistory()
    const [email, setEmail] =  useState('')
    const [password, setPassword] =  useState('')
    
const onSubmit = ()=>{
       const auth = getAuth();
       signInWithEmailAndPassword(auth, email, password)
           .then((userCredential) => {
               localStorage.setItem('token', userCredential._tokenResponse.idToken);
               history.push('/')
           })
           .catch(e => alert(e.message))
    }
    
    
    return(
        <center>
       <h1 className="pageHeading">Login</h1>
       <div>
          <label>username:</label>
          <input  type="email"   value={email}  onChange={e => setEmail(e.target.value)}/>
       </div>
       <div>
          <label>password:</label>
          <input  type="password"  value={password}   onChange={e => setPassword(e.target.value)}/>
       </div>
       <Link to="/signup">
                        Create Account?
                    </Link><br/>
       <button className= "loginBtn" onClick={onSubmit}>Login</button>
       </center>
    )
}

export default Login
