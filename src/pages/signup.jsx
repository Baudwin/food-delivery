import React from 'react'
import { Link } from 'react-router-dom'
export const Signup = () => {
  return (
    <>
    <div className="py-12 bg-[url('/images/img-2.jpg')]  bg-cover  flex justify-center items-center">
    <h1 className=" text-3xl font-bold text-white">Sign up</h1>
    </div>

    
        <div className='container py-14 sm:px-5 md:px-7'>
            <div className='shadow border flex flex-col lg:w-1/2 xl:w-1/2 m-auto p-5 gap-4'>
                <h1 className='font-bold text-lg'>Sign Up</h1>
                <input placeholder='Name' className='border p-2 focus:outline-none' type="text" name="" id="" />
                <input placeholder='Email' className='border p-2 focus:outline-none' type="text" name="" id="" />
                <input placeholder='Password' className='border p-2 focus:outline-none' type="password" name="" id="" />
                {/* <p className=' text-gray-500 flex items-center'>
                    <span><input className='rounded-sm bg-amber-500' type="radio" name="" id="" /></span>
                    <span className='text-sm'>Remember me?</span>
                    </p> */}
                <button className='bg-amber-500 text-white p-2'>Sign Up</button>
                <p className='text-right text-gray-400 text-sm'>Forgot password?</p>
                <p className='text-center text-gray-600'>Already have an account? <Link className='text-blue-500' to={'/login'}>Sign In</Link></p>
            </div>
            
        </div>
        </>
  )
}
