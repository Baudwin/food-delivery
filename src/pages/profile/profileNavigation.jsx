import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'
import {ClipLoader, ScaleLoader} from 'react-spinners'

export const ProfileNavigation = () => {
  const navigate = useNavigate()
  const logout = useAuthStore(state=>state.logout)
  const [loading, setLoading] = useState(false)



if (loading) {
  return <div className='flex justify-center items-center h-screen inset-0 bg-black bg-opacity-90 fixed'>
    <ScaleLoader color='white' size={60} speedMultiplier={1}/>
  </div>
}

  return (
    <header className='border-b-2 '>
    <nav className='flex justify-between items-center profile-nav '>
     <NavLink to={'details'} className='flex justify-center items-center gap-1'>
       <span className=''>
         Profile
       </span>
       
       </NavLink>

       <NavLink to={'orders'} className='flex justify-center items-center gap-1'>
       <span>
         Orders
       </span>
       
       </NavLink>

       <NavLink to={'address'} className='flex justify-center items-center gap-1'>
       <span>
         Address
       </span>
       
       </NavLink>

       <button onClick={()=>{
    
    setLoading(!loading)

    setTimeout(() => {
    logout()
    setLoading(false)  
    navigate(`/login`)

    }, 3000);
       }} className=' gap-1 text-red-500'>
       <span>
         Logout
       </span>
       
       </button>

 </nav>
</header>
  )
}
