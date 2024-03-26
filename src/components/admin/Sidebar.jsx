import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='sidebar flex flex-col'>
        <NavLink to={'items'} className=' p-3  hover:text-white font-medium'> Items</NavLink>
        <NavLink to={'categories'} className=' p-3  hover:text-white font-medium'> Categories</NavLink>
        <NavLink to={'menu'} className=' p-3  hover:text-white font-medium'> Menu</NavLink>
        <NavLink to={'orders'} className=' p-3  hover:text-white font-medium'> Orders</NavLink>
        {/* <NavLink to={'coupon'} className='p-3  hover:text-white font-medium'> Coupon</NavLink> */}
        <NavLink to={'setting'} className=' p-3  hover:text-white font-medium'> Settings</NavLink>
        <NavLink to={'setting'} className=' p-3  hover:text-white font-medium'> Logout</NavLink>
        
    </div>
  )
}
