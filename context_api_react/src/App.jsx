import { useState } from 'react'
import './App.css'
import UseContextProvider from './context/UseContextProvider'
import Login from "./components/login"
import Profile from './components/profile'
function App() {

  return ( 
    <>    
     <UseContextProvider>
       <div>
          <center><h1>Login</h1></center>
          <Login />
          <Profile />
       </div>
     </UseContextProvider>
    </>
  )
}

export default App
