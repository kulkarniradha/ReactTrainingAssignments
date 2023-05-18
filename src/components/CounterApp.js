import React, { useState } from 'react';

const CounterApp = () => {
    const [counter, setCounter]= useState(0);
    //console.log("..."+counter);
    const counterAddChangeHandler=()=>{
      setCounter(counter+1);
      //console.log(setCounter);
    }
    const counterSubChangeHandler=()=>{
      setCounter(counter-1);
     // console.log(setCounter);
    }
	
  return (
    <div>
        <h2>Counter: {counter}</h2>
          <button onClick={counterAddChangeHandler}>Increment</button>
          <br></br>
          <br></br>
        <button onClick={counterSubChangeHandler}>Decrement</button> 
    </div>
  )
}

export default CounterApp;