import React from "react";

const SumofTwoNumbers = () => {
  const [number1, setNumber1] = React.useState();
  const [number2, setNumber2] = React.useState();
  const [sum, setSum] = React.useState(0);
  function Addition() {
    setSum(number1 + number2);
  }

  return (
    <div>
      <h2>Sum of Two Numbers</h2>
      <input
        placeholder="First Number"
        type="number"
        value={number1}
        onChange={(e) => setNumber1(+e.target.value)}
      />
      <br></br>
      <br></br>
      <input
        placeholder="Second Number"
        type="number"
        value={number2}
        onChange={(e) => setNumber2(+e.target.value)}
      />
      <br></br>
      <br></br>
      <button onClick={Addition}>Addition</button>
      <p>Total:{sum || ""}</p>
    </div>
  );
};

export default SumofTwoNumbers;
