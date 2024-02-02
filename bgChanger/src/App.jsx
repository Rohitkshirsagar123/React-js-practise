
import { useState } from 'react'
import './App.css'

function App() {
  const [color,setcolor]=useState("white")
 
            
  return (
    <>
    <div className="mainbg" style={{backgroundColor:color}}>
      <center><h1>Background Changer</h1> <br /></center>

      <div className="colorPart">
          <button className='red'onClick={()=>{setcolor("red")}} >red</button>
          <button className='green' onClick={()=>{setcolor("green")}}>green</button>
          <button className='blue' onClick={()=>{setcolor("blue")}}>blue</button>
          <button className='pink' onClick={()=>{setcolor("pink")}}>pink</button>

          <button className='yellow' onClick={()=>{setcolor("yellow")}}>yellow</button>
          <button className='aqua' onClick={()=>{setcolor("aqua")}}>aqua</button>
          <button className='white' onClick={()=>{setcolor("white")}}>white</button>

      </div>
    </div>
    </>
  )
}

export default App
