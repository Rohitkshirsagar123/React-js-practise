import React, { useState } from 'react'

function App() {
  const[counter,setcounter]=useState(10);

  function addValue(){
    setcounter(counter+1)
  }
  function decValue(){
    setcounter(counter-1);
  }
  
  return (
    <>
   <div className="counter">
      <div className="div_counter">
        <div className="couter_sec">
          <h1>Counter Value <span>{counter}</span></h1> <br />
          <button className="button-20" onClick={addValue}>Add Value</button>
          <button className="button-20" onClick={decValue}>Decrease Value</button>
        </div>
      </div>
   </div>
    </>
  )
}

export default App
