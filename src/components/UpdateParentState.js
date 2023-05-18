import React, { useState } from 'react'
import ChildforUpdateParentState from './ChildforUpdateParentState';
const UpdateParentState = () => {
    const [count, setCount] = useState(0);
    const buttonClick = () => {
        setCount((prevCount) => prevCount + 1);
    };
  return (
    <div>
    {count}
    <ChildforUpdateParentState buttonClick={buttonClick}/>
    </div>
  )
}

export default UpdateParentState