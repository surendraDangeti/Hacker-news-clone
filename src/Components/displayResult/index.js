
const PageElements = props => {
    const { hackData} = props
    const { points, time, title, link} = hackData


    return(
           <div className="news-page">
               <div className="news-content">
               <p className="title"><button type="button" className="upVote">^</button> {title} <a href={link}>Link</a> <br/>
                <p className="news-comments">{points} points by {time} hours ago | hide | 29 comments </p>
                </p>
               </div>
            </div>
    )
}

export default PageElements