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
        <div className="pageContainer">
        <div className="card">
       <h1 className="pageHeading">Login</h1>
       <div>
          <label className="labelName">username:</label>
          <input  type="email" className="input" value={email} placeholder=' Email' onChange={e => setEmail(e.target.value)}/>
       </div>
       <div>
          <label  className="labelName">password:</label>
          <input className="input" type="password"  value={password} placeholder=' Password'  onChange={e => setPassword(e.target.value)}/>
       </div>
       <Link className="link" to="/signup">
                        Create Account?
                    </Link><br/>
       <button className= "loginBtn" onClick={onSubmit}>Login</button>
       </div>
       </div>
    )
}

export default Login
