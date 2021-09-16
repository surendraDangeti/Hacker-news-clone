import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './Components/Home/index.js'
import Login from './Components/Login'
import { initializeApp } from "firebase/app";
import SignUp from './Components/SignUp/index.js';
import  Submit from './Components/Submit/index.js'
import './App.css';


const firebaseConfig = {
  apiKey: "AIzaSyDUNQ1mo7aeDe8fSmZvPjyo-d_9KNpS2mE",
  authDomain: "hacker-news-fedcc.firebaseapp.com",
  projectId: "hacker-news-fedcc",
  storageBucket: "hacker-news-fedcc.appspot.com",
  messagingSenderId: "1041879871037",
  appId: "1:1041879871037:web:47f043986f7bd56df90454"
};

initializeApp(firebaseConfig);


function App() {
  
  return (
    <div>
       <BrowserRouter>
       <Switch>
       <Route exact path = "/" component= {HomePage}/>
       <Route exact path = "/login" component={Login}/>
       <Route exact path = "/signup" component= {SignUp}/>
        <Route exact path= "/new" component = {HomePage}/>
        <Route exact path = "/submit" component = {Submit} /> 
        </Switch>
        </BrowserRouter>
     </div>
  )
}

export default App;
