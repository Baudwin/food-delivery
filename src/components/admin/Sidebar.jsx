import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaReact, FaGithub, FaSignOutAlt } from 'react-icons/fa';


export const Sidebar = () => {
  return (
    <div className='sidebar flex flex-col'>
          <div>
      
    </div>
        <NavLink to={'items'} className=' p-3  hover:text-white font-medium'>  Items</NavLink>
        <NavLink to={'categories'} className=' p-3  hover:text-white font-medium'>Categories</NavLink>
        <NavLink to={'menu'} className=' p-3  hover:text-white font-medium'> Menu</NavLink>
        <NavLink to={'orders'} className=' p-3  hover:text-white font-medium'> Orders</NavLink>
        {/* <NavLink to={'coupon'} className='p-3  hover:text-white font-medium'> Coupon</NavLink> */}
        <NavLink to={'setting'} className=' p-3  hover:text-white font-medium'> Settings</NavLink>
        <NavLink to={'setting'} className=' p-3  hover:text-white font-medium '>
          {/* <FaSignOutAlt className='text-red-500 inline-block' />  */}
          <span>Logout</span> </NavLink>
        
    </div>
  )
}
