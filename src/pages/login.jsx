import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash, FaUserAlt } from "react-icons/fa";
import { useLoginUser } from '../hooks/useUserData';
import {ClipLoader} from 'react-spinners'


export const Login = () => {

  const [showPass, setShowPass] = useState(false)
  const {mutate, isPending} = useLoginUser()

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

const googleOauth = async()=>{
  window.open("https://food-delivery-app-backend-xi.vercel.app/auth/google", "_self")

}



  return (
    <>
    
<div className="py-16 bg-[url('/images/img-2.jpg')]  bg-cover  flex justify-center items-center">
<h1 className=" text-3xl font-bold text-white">Sign in </h1>
</div>

<div className='bg-amber-50'>
    <div className='container py-20 sm:px-5 md:px-7'>
      
        <div className='shadow border bg-white flex flex-col lg:w-1/2 xl:w-1/2 md:w-2/3 m-auto p-5 gap-4'>
            <h1 className='font-bold text-2xl'>Sign In</h1>
            <form className='space-y-4' onSubmit={loginUser} action="">
            <div className='flex items-center border p-2 space-x-1'>
            <FaRegEnvelope className='w-7 mt-0.5'/>
            <input onChange={handleChange}  placeholder='Email' value={userInfo.email} className='border focus:outline-none border-none w-full text-lg ' type="text" name="email"  />
            </div>
          
            <div className='flex items-center border p-2 space-x-1'>
            <FaLock className='w-7 '/>
            <input onChange={handleChange}  placeholder='Password' value={userInfo.password} className='border focus:outline-none border-none w-full text-lg ' type={showPass?"text": "password"} name="password" />
            <span onClick={()=>{showPass?setShowPass(false): setShowPass(true)}} className='text-xl font-bold w-5 cursor-pointer'>{showPass?<FaRegEyeSlash/>:<FaRegEye/> } </span>
            </div>
            <p className=' text-gray-500 flex items-center space-x-1'>
                <span><input className=' accent-blue-500 text-white mt-1.5 w-3 h-3' type="checkbox" name=""  /></span>
                <span className='text-sm'>Remember me?</span>
                </p>
            <button disabled={isPending} className={`bg-amber-500 text-sm font-semibold ${isPending? null :"hover:bg-amber-700" } text-white p-3 w-full`}>
            {isPending?<ClipLoader color='white' size={20} speedMultiplier={3}/> : "Sign In" } 
              </button>
            </form>
            <Link className='text-right text-gray-500 text-sm'>Forgot password?</Link>

              <div className='flex justify-center'>
      
        <span className=' font-bold border-2 p-1.5'>OR</span>
      
              </div>
              
<div onClick={googleOauth} className='flex items-center border gap-2  px-4' >
<FaGoogle/>
<button className=''>Sign in with Google</button>
</div>


            <p className='text-center text-gray-600'> <Link className='text-amber-500 font-semibold text-lg' to={'/signup'}>Create an account</Link></p>


        </div>

        
        
    </div>

</div>
    </>
  )
}


