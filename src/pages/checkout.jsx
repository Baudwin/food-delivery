import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore'
import { usePlaceOrder } from '../hooks/useOrderData'
import { toast } from 'react-toastify'
 

export const Checkout = () => {
    const navigate = useNavigate()
    const {mutate} = usePlaceOrder()
    const cart = useCartStore(state=>state.cart)
    const subTotal = useCartStore(state=>state.subTotal)

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
        toast.success("Order placed")
        setTimeout(()=>{
        navigate("/")
        }, 4000)
    }

    const orderDetails = {
        items: cart, 
        totalAmount : subTotal, 
        _id:"6608a55cd80f217c9d5c5c9f"
    }
    const placeOrder = ()=>{
    mutate(orderDetails)
    }

  return (
    <div>
        
        <div style={{backgroundImage:""}} className='p-14 bg-[url("/images/img-2.jpg")]  bg-cover flex justify-center items-center '>
            <h1 className='text-4xl font-bold  text-center text-white'> Checkout</h1>
        </div>

        <div className='container py-12 grid grid-cols-12 sm:px-3 md:px-4 gap-4'> 


            <div className=' lg:col-span-8 xl:col-span-8 sm:col-span-12 md:col-span-12 space-y-6'>
                
                <div className='flex flex-col gap-6'>


        <div className='space-y-3'>
              <h1 className='font-bold text-xl'>Personal Information</h1>

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
                 <h1 className='font-bold text-xl'>Delivery Address</h1>
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

                <div className='space-y-2'>
                    <h1 className='font-bold text-xl'>Payment</h1>
                    <div className='flex items-center gap-2'>
                        <input className='h-4 w-4' type="checkbox" name="" id="" />
                        <span className='text-sm text-gray-700 font-medium'>Payment on Delivery</span>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input className='h-4 w-4' type="checkbox" name="" id="" />
                        <span className='text-sm text-gray-700 font-medium line-through'>MTN Mobile Money</span>
                    </div>

                    <div className='flex items-center gap-2'>
                        <input className='h-4 w-4' type="checkbox" name="" id="" />
                        <span className='text-sm text-gray-700 font-medium line-through'>Orange Mobile Money</span>
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
                       
                    <button onClick={addAddress} className=' border text-center py-3 text-white bg-amber-500 shadow-sm'>Proceed to shipping</button> 
                </div>

            </div>




{/* SECOND CONTAINER  */}

            <div className='shadow lg:col-span-4 xl:col-span-4 sm:col-span-12 md:col-span-12  border rounded-sm text-sm px-3 py-5 h-fit'>

                <div className='space-y-2'>
                {cart.map(item=>{
                return<div key={item._id} className='flex gap-2 justify-between'>
                <img className='w-14 h-14 object-cover' src={item.img.url} alt="img" />
                <div className='flex flex-col'>
                    <span className='font-medium'>{item.itemName}</span>
                    <span className='text-sm text-right text-gray-500' >{item.price} XAF</span>
                    
                </div>   
            </div>
        
              })}     
                </div>
                <hr />
{/* Div with total amount  */}

                <div className='space-y-4 py-3'>

                <div className='flex justify-between items-center'>
                <h3 className=' text-[15px] text-slate-900'>Items Sub-total</h3>
                <span className=' text-sm text-gray-900'>{subTotal} XAF</span>
                </div>
                <div className='flex justify-between items-center'>
                <h3 className='font-thin'>Delivery Fee</h3>
                <span className='text-sm text-gray-600'>500 XAF</span>
                </div>
                {/* <div className='flex justify-between items-center'>
                <h3 className=''>Discount</h3>
                <span className='text-sm text-gray-600'>500 frs</span>
                </div> */}
                <hr/>

                <div className='flex justify-between items-center '>
                <h3 className='font-medium text-lg'>Total </h3>
                <span className='font-medium text-lg text-blue-500'>{subTotal + 500} XAF</span>
                </div>

                </div>


{/* PLACE ORDER BUTTON  */}
                    <button onClick={placeOrder} className='bg-amber-500 w-full py-3 text-white rounded flex justify-center items-center gap-1'>
                        
                       <span>Place Order</span> 
                       <span> 
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor" className="bi bi-arrow-right-short mt-0.5" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                        </svg>
                       </span>
                        </button>
            </div>

        </div>
        

    </div>
  )
}
