import React from 'react'
import { NavLink } from 'react-router-dom'
export const Profile = () => {
  return (
    <div className='container py-10 grid grid-cols-12 gap-3'>

        <nav className='flex flex-col profile-nav col-span-3 shadow '>
            <NavLink className=''>Profile</NavLink>
            <NavLink className=''>My Orders</NavLink>
            <NavLink className=''>Address</NavLink>
            <NavLink className=''>Logout</NavLink>
        </nav>

        <main className=' shadow col-span-9 p-4 space-y-4'>
            <h1 className='font-medium text-xl'>My Details</h1>
            <hr />
            <div className='rounded-full w-32 h-32 bg-amber-600 text-white text-5xl font-semibold flex justify-center items-center'>B</div>
            <hr />
            <div className='space-y-4'>
                <p className='text-lg '>Username : Baudwin{} </p>
                <p className='text-lg'>Email : </p>
                <p className='text-lg'>Phone : </p>
                <p className='text-lg'>Created on : </p>
            </div>
          <hr />
        <button className='bg-teal-500 text-white px-5 py-2 rounded shadow'>Edit Profile</button>
        </main>
        {/* <h1 className=''>My profile </h1> */}
        
    </div>
  )
}
