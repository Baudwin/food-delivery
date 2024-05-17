import React, { useEffect, useState } from 'react'
import { useAuthStore } from '../../store/useAuthStore'
import { format } from 'date-fns';
import {ClipLoader, PulseLoader, ScaleLoader} from 'react-spinners'

export const UserDetails = () => {
const [loading, setLoading]= useState(false)
const user = useAuthStore(state=>state.user)


  if (!user) {
    return <div className='flex justify-center items-center h-screen inset-0 bg-black bg-opacity-90 fixed'>
      <ScaleLoader color='white' speedMultiplier={1}/>
    </div>
  }
  
  return (
    <div className='space-y-5 sm:px-2 md:px-10'>
            <h1 className='font-medium text-xl uppercase'>My Details</h1>
           
            <div className='rounded border-2 shadow  w-32 h-32 bg-amber-600 text-white text-5xl font-semibold flex justify-center items-center'>{(user.username).substring(0,1)}</div>
            <hr />
            <div className='space-y-4'>
                <p className='text text-gray-600'>Username: {user?.username}</p>
                {/* <input type="text" className='bg-gray-600 w' name="" id="" /> */}
                <p className='text text-gray-600'>Email: {user?.email} </p>
                <p className='text text-gray-600'>Phone: {user?.phoneNumber}</p>
                <p className=' text-gray-500'> <span className='text-gray-500'>Joined on</span> : {format(new Date(user?.createdOn), 'MMMM d, yyyy')}  </p>
            </div>
          <hr />
        <button className='bg-amber-600 text-white text-sm px-5 font-semibold py-2 rounded shadow'>Edit Profile</button>
        
    </div>
  )
}
