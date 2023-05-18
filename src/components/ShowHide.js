import React, { useState } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? <h1>show Me and Hide Me</h1> : null}
      <button onClick={()=>setShow(true)}>Show</button>
      <button onClick={()=>setShow(false)}>Hide</button>
    </div>
  );
};
export default ShowHide;
