import React from 'react'
import Header from "../Header"
import axios from 'axios';
import  PageElements from '../displayResult'    
import { v4 as uuidv4 } from 'uuid';
import './index.css'

const DBurl = axios.create({
  baseURL: "https://hacker-news-fedcc-default-rtdb.firebaseio.com"
})

class HomePage extends React.Component{
    state = {
        NewsData: [],
    }

  upVote = (hackData)=> {
    const{id} = hackData 
    if (localStorage.getItem('token')){
    const Data = {
      id: hackData.id,
      title: hackData.title,
      link: hackData.link,
      time: hackData.time,
      points: hackData.points+1
    }

    axios.put(`https://hacker-news-fedcc-default-rtdb.firebaseio.com/register/${id}.json`, Data).then((response) => {
      console.log(response);
      this.fetchData()
    })}

  }
  
  downVote = (hackData)=> {
    const{id} = hackData
    const token = localStorage.getItem('token'); 
    if (hackData.points >= 1 ){
    const Data = {
      id: hackData.id,
      title: hackData.title,
      link: hackData.link,
      time: hackData.time,
      points: hackData.points-1
    }
    const token = localStorage.getItem('token'); 
    token &&  
    axios.put(`https://hacker-news-fedcc-default-rtdb.firebaseio.com/register/${id}.json`, Data).then((response) => {
      console.log(response);
      this.fetchData()
    })
  }
  }


  componentDidMount(){
     this.fetchData()
  }

  fetchData = () => {
    DBurl.get("register.json").then((response)=> {
      console.log(response)

      const hackerData= []
      for (let key in response.data){
        hackerData.push({...response.data[key], id: key})
      }
      this.setState({NewsData: hackerData})
    })
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
                     NewsData.map((hackData, index) => {
                    return <li key={hackData.id}> 
                    <PageElements hackData={hackData} postId={index+1} upVoteFunction = {this.upVote}  downVoteFunction = { this.downVote} key={hackData.key} />
                </li>  })}
                   </ol> 
                  </div>
                  </div>
            </div>
)};
}

export default HomePage

