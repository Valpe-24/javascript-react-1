
import React from 'react'
import Tweet from './Tweet'

const Tweets = () => {
  

  return (
    <div className="Tweets">
    <div className = 'Tweet_Storm'>Tweet Storm</div>
    <Tweet message="It's payday!!!" color="green"/>
    <Tweet message="I just bought a new car!" color="yellow" />
    <Tweet message="I just smashed my new car." color="red" />
</div>
  )
}

export default Tweets
