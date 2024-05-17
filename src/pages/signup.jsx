import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useRegisterUser } from '../hooks/useUserData';


import { FaRegEye,FaGoogle, FaRegEyeSlash, FaUserAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import {ClipLoader} from 'react-spinners'



export const Signup = () => {

    const googleOauth = async()=>{
        window.open("https://food-delivery-app-backend-xi.vercel.app/auth/google", "_self")
      
      }

    const {mutate, isPending} = useRegisterUser()

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

<div className='bg-amber-50'>
    
        <div className='container  py-12 sm:px-5 md:px-7'>
            <div className='shadow border bg-white flex flex-col lg:w-1/2 xl:w-1/2 md:w-2/3 m-auto p-5 gap-5'>
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
            <span onClick={()=>{showPass?setShowPass(false): setShowPass(true)}} className='text-xl font-bold w-5 cursor-pointer'>{showPass?<FaRegEyeSlash/>:<FaRegEye/> } </span>
            </div> 

                <button disabled={isPending} type='submit' className={`bg-amber-500 ${isPending? null :"hover:bg-amber-700" }  font-semibold text-white p-2 w-full`}> 
                {isPending?<ClipLoader color='white' size={20} speedMultiplier={3}/> : "Sign Up" } 
                 
                 </button>
            </form>
            <div className='flex justify-center'>
      
      <span className=' font-bold border-2 p-1.5'>OR</span>
    
            </div>
            
<div onClick={googleOauth} className='flex items-center border gap-2  px-4' >
<FaGoogle/>
<button className=''>Sign up with Google</button>
</div>

                <p className='text-center '>Already have an account ? <Link className='text-amber-500 font-semibold text-lg' to={'/login'}>Sign in</Link></p>
            </div>
        </div>


</div>
        </>
  )
}
