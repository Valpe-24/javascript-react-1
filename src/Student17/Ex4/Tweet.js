import React from 'react'

const Tweet = ({message, color, countTweets}) => {
  return (
    
    <div style= {{backgroundColor: color}}>{message}
    <button onClick={() =>{ countTweets()}}>Likes</button>
    </div>
  )
}

export default Tweet
