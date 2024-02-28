import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
function login() {
    const [username ,setusername] = useState('')
    const[password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handlesubmit=(e)=>{
        e.preventDefault();
        setUser({username, password})

    }
    return (
        <>
          <input type="text"
            value={username}
            onChange={(e)=> setusername(e.target.value)}
            placeholder='username'
          />
          <input type="text" 
          value={password}
          onChange={(e)=> setpassword(e.target.value)}
          placeholder='username' />
          <button className='button-20' onClick={handlesubmit}>Submit </button>
        </>
    )
}

export default login