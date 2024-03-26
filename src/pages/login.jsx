import React from 'react'
import { Link } from 'react-router-dom'
export const Login = () => {
  return (
    <>
    
<div className="py-12 bg-[url('/images/img-2.jpg')]  bg-cover  flex justify-center items-center">
<h1 className=" text-3xl font-bold text-white">Sign in </h1>
</div>

    <div className='container py-14 sm:px-5 md:px-7'>
        <div className='shadow border flex flex-col lg:w-1/2 xl:w-1/2 m-auto p-5 gap-4'>
            <h1 className='font-bold text-lg'>Sign In</h1>
            <input placeholder='Email' className='border p-2 focus:outline-none' type="text" name="" id="" />
            <input placeholder='Password' className='border p-2 focus:outline-none' type="text" name="" id="" />
            {/* <p className=' text-gray-500 flex items-center'>
                <span><input className=' accent-amber-500 text-white' type="checkbox" name="" id="" /></span>
                <span className='text-sm'>Remember me?</span>
                </p> */}
            <button className='bg-amber-500 text-white p-2'>Sign Up</button>
            <Link className='text-right text-gray-400 text-sm'>Forgot password?</Link>
            <p className='text-center text-gray-600'>Don't have an account? <Link className='text-blue-500' to={'/signup'}> Sign Up</Link></p>
        </div>
        
    </div>
    </>
  )
}
