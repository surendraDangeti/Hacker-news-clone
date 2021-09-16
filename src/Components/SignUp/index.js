import React, {useEffect, useState} from 'react'
import { useHistory, Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
 

const SignUp = () => {
    let history = useHistory()
    const [email, setEmail] =  useState('')
    const [password, setPassword] =  useState('')

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         history.push('/')
    //     }
    // },[])
    
const onSubmit = ()=>{
       const auth = getAuth();
         
       createUserWithEmailAndPassword(auth, email, password)
               .then(() => history.push('/home'))
               .catch((e) =>  history.push('/home'))
}
    
    
    return(
       <center>
       <h1>SignUp</h1>
       <div>
          <label>username:</label>
          <input className="" type="email"   value={email}  onChange={e => setEmail(e.target.value)}/>
       </div>
       <div>
          <label>password:</label>
          <input className="" type="password"  value={password}   onChange={e => setPassword(e.target.value)}/>
       </div>
       <Link to="/">
        Alreday have an account?
        </Link>
        <br/>
       <button onClick={onSubmit}>SignUp</button>
       </center>
    )
}

export default  SignUp