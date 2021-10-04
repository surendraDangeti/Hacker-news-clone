import React, {useState} from 'react'
import { useHistory, Link } from "react-router-dom";
import './index.css'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
 

const SignUp = () => {
    let history = useHistory()
    const [email, setEmail] =  useState('')
    const [password, setPassword] =  useState('')
    
const onSubmit = ()=>{
       const auth = getAuth();
         
       createUserWithEmailAndPassword(auth, email, password)
               .then(() => { 
               signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                localStorage.setItem('token', userCredential._tokenResponse.idToken);
                history.push('/')
            })
               .catch((e) => alert(e.message))
            })
               .catch((e) => alert(e.message))
               
}
    
    
    return(
        <div className="pageContainer">
        <div className="card">
       <h1 className="pageHeading">SignUp</h1>
       <div>
          <label  className="labelName">username:</label>
          <input type="email" className="input"   placeholder=' Email' value={email}  onChange={e => setEmail(e.target.value)}/>
       </div>
       <div>
          <label className="labelName">password:</label>
          <input type="password"  className="input" value={password}   placeholder=' Password' onChange={e => setPassword(e.target.value)}/>
       </div>
       <Link to="/login" className="link"> 
        Already have an account?
        </Link>
        <br/>
       <button className="SignUpBtn" onClick={onSubmit}>SignUp</button>
       </div>
       </div>
    )
}

export default  SignUp