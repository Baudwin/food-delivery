import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useUserData } from '../hooks/useUserData';


import { FaUserAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa6';


export const Signup = () => {
    const {mutate} = useUserData()

    const [userInfo, setUserInfo] = useState({
        username: "",
        email : "", 
        phoneNumber:"",
        password: ""
    })

    const [showPass, setShowPass] = useState(false)


    const handleChange = (e)=>{
        const {name, value} = e.target
        setUserInfo({...userInfo, [name]:value})
    }


   const signUp = (e)=>{
    e.preventDefault()
    mutate(userInfo);
   }

  return (
    <>
    <div className="py-12 bg-[url('/images/img-2.jpg')]  bg-cover  flex justify-center items-center">
    <h1 className=" text-3xl font-bold text-white">Sign up</h1>
    </div>

    
        <div className='container py-12 sm:px-5 md:px-7'>
            <div className='shadow border flex flex-col lg:w-1/2 xl:w-1/2 md:w-2/3 m-auto p-5 gap-5'>
                <h1 className='font-bold text-2xl'>Sign Up</h1>
           
            <form className='space-y-4' onSubmit={signUp} action="">
            <div className='flex items-center border p-2 space-x-1'>
            <FaUserAlt className='w-7 '/>
            <input onChange={handleChange} placeholder='Username' className=' focus:outline-none w-full text-lg ' type="text" name="username" id="name" />
            </div>

            <div className='flex items-center border p-2 space-x-1'>
            <FaRegEnvelope className='w-7 mt-0.5'/>
            <input onChange={handleChange} placeholder='Email' className=' focus:outline-none w-full text-lg ' type="email" name="email" id="email" />
            </div>

            <div className='flex items-center border p-2 space-x-1'>
            <FaPhoneAlt className='w-7 '/>
            <input onChange={handleChange} placeholder='Phone number' className=' focus:outline-none w-full text-lg ' type="number" name="phoneNumber"  />
            </div>
          
            <div className='flex items-center border p-2 space-x-1'>
            <FaLock className='w-7 '/>
            <input onChange={handleChange} placeholder='Password' className=' focus:outline-none w-full text-lg ' type={showPass?"text": "password"} name="password"  />
            <span onClick={()=>{showPass?setShowPass(false): setShowPass(true)}} className='text-xl font-bold w-5 cursor-pointer'>{showPass?<FaEyeSlash/>:<FaEye/> } </span>
            </div>

                <button type='submit' className='bg-amber-500 text-white p-2 w-full'>Sign Up</button>
            </form>
                
                <p className='text-right text-gray-400 text-sm'>Forgot password?</p>
                <p className='text-center text-gray-600'>Already have an account? <Link className='text-blue-500' to={'/login'}>Sign In</Link></p>
            </div>
            
        </div>
        </>
  )
}
