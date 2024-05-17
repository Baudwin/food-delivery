
import { useState } from 'react'
import { getAddress } from '../../hooks/useAddressData'
import { FaHouseUser, FaMoneyBill, FaRegUser } from 'react-icons/fa'
import {Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

export const Address = () => {
    const {data:addresses} = getAddress()
    const [selectedAddress, setSelectedAddress] = useState(null)
    const navigate = useNavigate()
    const selectAddress = (e)=>{
        const {value} = e.target
        setSelectedAddress(value)
    }
  return (
   <>
  
    <div className='flex items-center gap-2'>

       <FaHouseUser className='w-5 h-6'/>
       <h1 className='font-bold text-xl'>Delivery Address </h1>
       </div>


       {/* All addresses  */}
<form className='space-y-4 ' action="">
       {
           addresses?.data.map(address=>{
               return (
        <div key={address._id} >                       
<div  className='space-x-3  flex py-2'>
<input onChange={selectAddress} className='h-5 w-5 ' type="radio" value={address._id} name="selectedAddress" id={address._id} />
<label className='' htmlFor={address._id}>
   <h1 className='text-xl font-semibold capitalize'>{address.userID.username}</h1>
   <p className=' capitalize'> {address.building}, {address.street}, {address.city}, {address.state} </p>
   <p>Contact : <span>{address.userID.phoneNumber}</span></p>
   <button className='text-red-500 font-semibold text-lg'>Delete</button>
</label>  
</div>
<hr />
        </div >
        
               )
           })
       }
       
</form>

       {/* Add new Address  */}
       <div className='w-fit'>
       <Link to={'add-address'} className='text-blue-600 text-xl'> <span className='text-3xl'>+</span>  Add New Address</Link>
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
          
       <button onClick={()=>{
        if (!selectedAddress) {
            toast.warning("Please select an address")
        }else{
            toast.success("Address selected")
            setTimeout(() => {
                 navigate(`payment/${selectedAddress}`)
            }, 4000);
           
        }

       }} className=' border text-center py-3 text-white bg-teal-500 shadow-sm hover:bg-teal-700'>Proceed to Payment</button> 

   </div>

   </>
  )
}
