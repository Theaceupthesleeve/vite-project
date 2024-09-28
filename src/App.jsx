import { useState } from "react";

function App() {

  let [num, setNum] = useState(0)

  function minusCounter(){
    setNum(num - 1)
    console.log(num);
  }

  function addCounter() {
    // console.log("counter added");
    setNum(num + 1)
    console.log(num);
  }
  return (
    <>
      <h1>Hello world</h1>
      <h1>{num}</h1>
      <button onClick={addCounter}>add </button><br/><br/>
      <button onClick={minusCounter}>minus </button>

    </>
  )
}

export default App