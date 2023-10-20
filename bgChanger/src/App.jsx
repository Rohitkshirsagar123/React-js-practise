
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setcolor]=useState("black")
 
       
  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <h1>background changer</h1> <br />

      <div className="colorPart">
          <button className='red'onClick={()=>{setcolor("red")}} >red</button>
          <button className='green' onClick={()=>{setcolor("green")}}>green</button>
          <button className='blue' onClick={()=>{setcolor("blue")}}>blue</button>
          <button className='pink' onClick={()=>{setcolor("pink")}}>pink</button>
      </div>
    </div>
    </>
  )
}

export default App
