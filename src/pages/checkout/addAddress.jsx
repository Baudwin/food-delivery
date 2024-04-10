import React, { useState } from 'react'
import { FaHouseUser, FaMoneyBill, FaRegUser } from 'react-icons/fa'
import { Link, useNavigate} from 'react-router-dom'
import { addAddress } from '../../hooks/useAddressData'
import {toast} from 'react-toastify'

export const AddAddress = () => {

    const {mutate} = addAddress()
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

    
    const addNewAddress = (e)=>{
        e.preventDefault()
        mutate(addressInfo)
        console.log(addressInfo);
    }



  return (
   
<div className=' sm:px-5 md:px-8 container flex flex-col gap-6'>

<h1 className='text-2xl font-bold'>Add New Address</h1>
{/* <div className='space-y-3'>
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

    </div> */}


<form className='space-y-4' onSubmit={addNewAddress} action="">
 <div className='space-y-3'>
   
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
        <div className='space-x-3'>
          <button className='bg-green-500 text-white p-3 rounded shadow-lg hover:bg-green-600'> Add Address </button>   
          <button onClick={()=>navigate("/checkout")} className='bg-red-500 text-white p-3 rounded shadow-lg hover:bg-red-600'> Cancel </button>
        </div>
       

</form>
   
        
        </div>

  )
}
