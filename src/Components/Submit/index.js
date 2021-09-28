import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Header from "../Header"
import { v4 as uuidv4 } from 'uuid';
import axios from "axios"
import './index.css'

const Submit = () => {
    let history = useHistory()
    const [title, setTitle] =  useState('')
    const [link, setlink] =  useState('')
    const [text, setText] =  useState('')

 useEffect(() => {
     const token = localStorage.getItem('token');
     if (!token) {
         history.push('/login')
    }
},[])


 const onChamgetextArea = (e) =>{
    setText(e.target.value)
    }
  

const onSubmitpost = ()=>{
    if (text.length > 1){
        const register = {
        title : text,
        link : link,
        id :  uuidv4(),
        time: new Date(),
        points: 0
        }
    axios.post('https://hacker-news-fedcc-default-rtdb.firebaseio.com/register.json', register)
    .then(()=>alert("Submitted successfully"))

} else {
    const register = {
        title : title,
        link : link,
        id :  uuidv4(),
        time: new Date(),
        points: 0
}     
    axios.post('https://hacker-news-fedcc-default-rtdb.firebaseio.com/register.json',  register)
    .then(()=>alert("Submitted successfully"))

}
setlink("")
setTitle("")
setText("")
}
    return(
       <>
       <Header/>
       <div className="submit-container">
       <div className="container">
       <div>
         <div>
          <label className="boxName">title:</label>
          <input className="title-box" type="text"   value={title}  onChange={e => setTitle(e.target.value)}/>
          </div>
          <div>
          <label className="boxName">url:</label>
          <input className="urlBox" type="text"  value={link}   onChange={e => setlink(e.target.value)}/>
          </div>
          <p>or</p>
           <div className="text-areaContainer">
          <label className="text">text</label>
          <textarea className="textArea"  value={text}   onChange ={onChamgetextArea}>
          </textarea>
          </div>
         </div> 
         <button className = "postBtn" onClick={onSubmitpost}>Submit</button> 
      <p> Leave url blank to submit a question for discussion. If there is no url, the text (if any) will appear at the top of the thread.</p>
       <p> You can also submit via <a href = "https://news.ycombinator.com/bookmarklet.html">bookmarklet.</a></p>
      </div>
       </div>
       </>
    )
}

export default Submit 