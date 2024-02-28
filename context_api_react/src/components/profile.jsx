import React,{useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div className='profileData'>Please login</div>

    return <div className='profileData'>
       <div className="datap">
       <h2> Welcome {user.username}</h2> 
        <p>What's plan today ?</p>
       </div>
    </div>
}

export default Profile
