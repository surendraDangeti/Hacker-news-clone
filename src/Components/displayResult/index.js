
import './index.css'
const PageElements = props => {
    const { hackData, upVoteFunction, downVoteFunction} = props
    const {id, points, time, title, link} = hackData

    return(
           <div className="news-page">
               <div className="news-content">
               <p className="title">
               <button type="button" id = {`${title}upVote`} onClick={() => upVoteFunction(hackData, `${title}upVote`, `${title}downVote` )}><img className="countBtn" src="https://res.cloudinary.com/dbmvwqck0/image/upload/v1632824664/upload_lpbvt1.png" alt="UpBtn"/></button>
               <button type="button" id= {`${title}downVote`} onClick={() =>downVoteFunction(hackData, `${title}downVote`,  `${title}upVote`)}><img className="countBtn" src="https://res.cloudinary.com/dbmvwqck0/image/upload/v1632824673/down-arrow_atgk4m.png" alt="DownBtn"/></button>
                {title} 
                <a href={link}  target="_blank">Link</a> <br/>
                <p className="news-comments">{points} points by {time} hours ago | hide | 29 comments </p>
                </p>
               </div>
            </div>
    )
}

export default PageElements  