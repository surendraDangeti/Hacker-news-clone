import React, {useState} from 'react'
import { useHistory, Link } from "react-router-dom";
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
       <center>
       <h1>SignUp</h1>
       <div>
          <label>username:</label>
          <input type="email"   value={email}  onChange={e => setEmail(e.target.value)}/>
       </div>
       <div>
          <label>password:</label>
          <input type="password"  value={password}   onChange={e => setPassword(e.target.value)}/>
       </div>
       <Link to="/login">
        Already have an account?
        </Link>
        <br/>
       <button onClick={onSubmit}>SignUp</button>
       </center>
    )
}

export default  SignUp