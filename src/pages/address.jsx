import React, { useState } from 'react'
import { FaHouseUser, FaMoneyBill, FaRegUser } from 'react-icons/fa'
import { Link, useNavigate} from 'react-router-dom'
import { usePlaceOrder } from '../hooks/useOrderData'
import {toast} from 'react-toastify'

export const Address = () => {
    // const {mutate} = usePlaceOrder()
    const navigate = useNavigate()
    const [addressInfo, setAddressInfo] = useState({
        state : "", 
        city: "", 
        street : "", 
        building : "",
        additionalInfo : ""
    }) 


    const handleChange = (e)=>{
        const {name,value} = e.target
        setAddressInfo({...addressInfo, [name]:value})
    }

    
    const addAddress = (e)=>{
        e.preventDefault()
        toast.success("Address added succcessfully")
        setTimeout(()=>{
        navigate("shipping")
        }, 4000)
    }



  return (
    <div className='space-y-3'>
   
<div className='flex flex-col gap-6'>

<div className='space-y-3'>
      <div className='flex items-center gap-2'>
        <FaRegUser/>
        <h1 className='font-bold text-lg'>Personal Information:</h1>
      </div>

        <div className='flex sm:flex-col lg:gap-4 xl:gap-4 sm:gap-3 md:gap-3'>
            <div className='flex flex-col flex-1 gap-1'>
            <label className='font-medium text-sm' htmlFor="">Name</label>
             <input placeholder='Titah' disabled className=' p-1 shadow-sm text-lg ' type="text" />  
            </div>
        </div>

        <div className='flex sm:flex-col lg:gap-4 xl:gap-4 sm:gap-3 md:gap-3'>
            <div className='flex flex-col flex-1 gap-1'>
            <label className='font-medium text-sm' htmlFor="">Email</label>
             <input placeholder='baudwin@gmail.com' disabled className=' shadow-sm text-lg p-1' type="email" />  
            </div>

                <div className='flex flex-col flex-1 gap-1'>
                <label className='font-medium text-sm' htmlFor="">Phone number</label>
                <input disabled placeholder='678680324' className=' shadow-sm  p-1 text-lg' type="number" />
                </div>
        </div>   

    </div>


    <div className='space-y-3'>
        <div className='flex items-center gap-2'>

             <FaHouseUser className='w-5 h-6'/>
           <h1 className='font-bold text-lg'>Delivery Address: </h1>
        </div>
         
        <div className='flex sm:flex-col gap-4 lg:gap-4 xl:gap-4 sm:gap-3 md:gap-3'>
            <div className='flex flex-col flex-1 gap-1'>
            <label className='font-medium text-sm' htmlFor="">Region/State</label>
             <input onChange = {handleChange} className='border p-2 focus:outline-none' name='state' type="text" />  
            </div>

                <div className='flex flex-col flex-1 gap-1'>
                <label className='font-medium text-sm' htmlFor="">City</label>
                <input onChange = {handleChange} name='city' className=' shadow-sm border p-2 focus:outline-none' type="text" />
                </div>
        </div>

        <div className='flex sm:flex-col gap-4 lg:gap-4 xl:gap-4 sm:gap-3 md:gap-3'>
            <div className='flex flex-col flex-1 gap-1'>
            <label className='font-medium text-sm' htmlFor="">Street Name</label>
             <input name='street' onChange = {handleChange} className='border p-2 focus:outline-none' type="text" />  
            </div>

                <div className='flex flex-col flex-1 gap-1'>
                <label className='font-medium text-sm' htmlFor="">Building Name/<span className='text-sm'>Number</span></label>
                <input name='building' onChange = {handleChange} className=' shadow-sm border p-2 focus:outline-none' type="text" />
                </div>
        </div>

        <div className='flex flex-col gap-1'>
                <label className='font-medium text-sm' htmlFor="">Additional Info (optional)</label>
                <textarea onChange = {handleChange} className='p-2 lg:w-1/2 xl:w-1/2  shadow-sm border focus:outline-none' name="additionalInfo" id="" cols="5" rows="3"></textarea> 
            </div>

        </div>
        
        </div>

        <div className='grid lg:grid-cols-2 xl:grid-cols-2 lg:gap-5 xl:gap-5 sm:gap-3 md:gap-3 '>
            
            <Link  to={'/shopping-cart'} className='text-slate-600 py-3  bg-white border shadow-sm flex justify-center items-center gap-1'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short mt-0.5" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                </svg>
                </span>
                <span>
              Back to Cart
                </span> 
                </Link>
               
            <button onClick={addAddress} className=' border text-center py-3 text-white bg-amber-500 shadow-sm'>Proceed to delivery</button> 

        </div>
    </div>
  )
}
