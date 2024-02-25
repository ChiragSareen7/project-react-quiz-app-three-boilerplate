import React from 'react'

 function Result(props) {
  return (
    <div className='cond'>
    <div id="top">
          <img src="public/download.png" alt="Logo" />
          <h4 className='name'>Quizeteria</h4>
        </div>
        <div className='imageText'>
        <div className='img'>
          <img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXJzMmFuYXJxOXR4a294eXBjdTlhbWx6bWk0d3dnbDdlYm1ydWNqYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mGK1g88HZRa2FlKGbz/giphy.gif' alt="good luck" width="400px"></img>
        </div>
    <div className='result'>
      <h2>Your Performance</h2>
      <h4>Total Score {props.score}/100</h4>
      <h4>Correct Answers : {props.correctAnswer} out of 5</h4>
      <button onClick={props.handlePlayAgain} className='btn'>Restart</button>
 </div>
 </div>
    </div>
  )
}
export default Result;