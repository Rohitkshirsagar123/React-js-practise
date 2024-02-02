import { useState } from 'react'

import './App.css'
  
function App() {
  let [counter, setcounter] = useState(15)
  // let counter=2;

  const addVal= () => {
    counter=counter+1;
    if(counter<20){
      setcounter(counter)
     
      }
      else{
        alert("value is above 20 please decrease value")
      }
    console.log(counter);
  };

  const remVal= ()=>{
    counter=counter-1;
    if(counter>0){
    setcounter(counter)
    }
    else{
      alert("value is below 0 please increase value")
    }
    // console.log(counter)
  }

  return (
    <>
     <h1>Practise React hooks </h1>
     <h1> {counter} </h1> 
     <h1> counter val is {counter} </h1>
     <button onClick={addVal}>increase by </button>
     <button onClick={remVal}>decrease</button>

     <h1> cnt val is {counter} </h1>
    </>
  )
}

export default App
