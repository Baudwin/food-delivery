import React from 'react'
import { useAuthStore } from '../../store/useAuthStore'
import { format } from 'date-fns';

export const UserDetails = () => {
    const user = useAuthStore(state=>state.user)
  return (
    <div>
            <h1 className='font-medium text-xl'>My Details</h1>
           
            <div className='rounded-full w-32 h-32 bg-amber-600 text-white text-5xl font-semibold flex justify-center items-center'>B</div>
            <hr />
            <div className='space-y-4'>
                <p className='text-lg '>Username : {user.username}</p>
                <p className='text-lg'>Email : {user.email} </p>
                <p className='text-lg'>Phone : {user.phoneNumber}</p>
                <p className='text-lg'>Created on : {format(new Date(user.createdOn), 'MMMM d, yyyy')}  </p>
            </div>
          <hr />
        <button className='bg-teal-500 text-white px-5 py-2 rounded shadow'>Edit Profile</button>
        
    </div>
  )
}
