import React, { useState } from 'react'
import ProfileInfo from './ProfileInfo'
import { useNavigate } from 'react-router-dom'


const Navbar = ({userInfo}) => {
    
    const navigate=useNavigate();
    const logoutHandler=()=>{
        localStorage.clear();
        navigate('/login');
    }
  return (
    <div className='bg-white flex justify-between drop-shadow px-2 py-2'>
      <h2 className='text-xl font-bold px-2 py-6'>NOTES</h2>
      <div>
        {
            userInfo && 
            <ProfileInfo onLogout={logoutHandler} userInfo={userInfo}></ProfileInfo>
        }
      </div>
    </div>
  )
}

export default Navbar
