import { useState } from 'react';
import React from 'react'
import Tweet from './Tweet'

const Tweets = () => {
  let[counter, setCounter] = useState(0);
  const countTweets = () =>{
    setCounter(++counter);
  }
  return (
    <div className="Tweets">
    <div className = 'Tweet_Storm'>Total Likes = {counter}</div>
    <Tweet message="It's payday!!!" color="green" countTweets= {countTweets}/>
    <Tweet message="I just bought a new car!" color="yellow" countTweets= {countTweets} />
    <Tweet message="I just smashed my new car." color="red" countTweets= {countTweets} />
</div>
  )
}

export default Tweets
