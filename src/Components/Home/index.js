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
        NewsData: [],
        NewData2: [],
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
    const {NewData2} = this.state
    console.log(NewData2)
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
                </li>  })}
                   </ol>
                  </div>
                  { NewData2.map(each => <h1>{each.title}</h1>) }
                  </div>
            </div>
)};
}

export default HomePage

