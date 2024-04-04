import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useLoginUser } from '../hooks/useUserData';

export const Login = () => {
  const [showPass, setShowPass] = useState(false)
  const {mutate} = useLoginUser()

  const [userInfo, setUserInfo] = useState({
    email : "", 
    password: ""
})

const handleChange = (e)=>{
  const {name, value} = e.target
  setUserInfo({...userInfo, [name]:value})
}

const loginUser = (e)=>{
e.preventDefault()
mutate(userInfo)
}

  return (
    <>
    
<div className="py-12 bg-[url('/images/img-2.jpg')]  bg-cover  flex justify-center items-center">
<h1 className=" text-3xl font-bold text-white">Sign in </h1>
</div>

    <div className='container py-12 sm:px-5 md:px-7'>
      
        <div className='shadow border flex flex-col lg:w-1/2 xl:w-1/2 md:w-2/3 m-auto p-5 gap-4'>
            <h1 className='font-bold text-2xl'>Sign In</h1>
            <form className='space-y-4' onSubmit={loginUser} action="">
            <div className='flex items-center border p-2 space-x-1'>
            <FaRegEnvelope className='w-7 mt-0.5'/>
            <input onChange={handleChange}  placeholder='Email' value={userInfo.email} className='border focus:outline-none border-none w-full text-lg ' type="text" name="email"  />
            </div>
          
            <div className='flex items-center border p-2 space-x-1'>
            <FaLock className='w-7 '/>
            <input onChange={handleChange}  placeholder='Password' value={userInfo.password} className='border focus:outline-none border-none w-full text-lg ' type={showPass?"text": "password"} name="password" />
            <span onClick={()=>{showPass?setShowPass(false): setShowPass(true)}} className='text-xl font-bold w-5 cursor-pointer'>{showPass?<FaEyeSlash/>:<FaEye/> } </span>
            </div>
            {/* <p className=' text-gray-500 flex items-center'>
                <span><input className=' accent-amber-500 text-white' type="checkbox" name="" id="" /></span>
                <span className='text-sm'>Remember me?</span>
                </p> */}
            <button className='bg-amber-500 text-white p-2 w-full'>Sign In</button>
            </form>
            <Link className='text-right text-gray-400 text-sm'>Forgot password?</Link>
            <p className='text-center text-gray-600'>Don't have an account? <Link className='text-blue-500' to={'/signup'}>Create new account</Link></p>
        </div>
        
    </div>
    </>
  )
}
