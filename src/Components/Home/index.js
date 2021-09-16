import React from 'react'
import Header from "../Header"
import axios from 'axios';
import  PageElements from '../displayResult'    
import { v4 as uuidv4 } from 'uuid';
import './index.css'

const register = {
    id :  uuidv4(),
    title: 'AI Movie Posters',
    link: 'https://news.ycombinator.com/item?id=28386508',
    points: "1",
    time: new Date()
}

class HomePage extends React.Component{
    state = {
        NewsData: []
    }

   componentDidMount(){
      this.getData()


   }

   getData = async()=>{
     const NewData = await axios('https://hacker-news-fedcc-default-rtdb.firebaseio.com/register.json', register)
     var hackerData = []
     for(let key in NewData.data){
       let value = NewData.data[key]
        hackerData.push(value)
     }
     this.setState({NewsData: hackerData})
}

  render(){
    const {NewsData} = this.state
    return(
             <div>
            <Header />
            <div className="main-container">
                 <div className="app-container">
                 <ol>
                   {
                     NewsData.map(hackData => {
                    return <li key={hackData.id}>
                    <PageElements hackData={hackData} key={hackData.key} />
                </li>   })}
                   </ol>
                  </div>
                  </div>
                  <div className="footer">
                 </div>
            </div>
)};
}

export default HomePage

