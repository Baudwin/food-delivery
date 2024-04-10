import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export const ProfileNavigation = () => {
  return (
    <header className='border-b-2 '>
    <nav className='flex justify-between items-center profile-nav '>
     <NavLink to={'details'} className='flex justify-center items-center gap-1'>
       <span>
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

       <Link className='flex justify-center items-center gap-1 text-red-500'>
       <span>
         Logout
       </span>
       
       </Link>

 </nav>
</header>
  )
}
