import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore'

export const Checkout = () => {
    const cart = useCartStore(state=>state.cart)
  return (
    <div>
        
        <div style={{backgroundImage:""}} className='p-14 bg-[url("/images/img-2.jpg")]  bg-cover flex justify-center items-center '>
            <h1 className='text-4xl font-bold  text-center text-white'> Checkout</h1>
        </div>

        <div className='container py-12 grid grid-cols-12 sm:px-3 md:px-4 gap-4'> 


            <div className=' lg:col-span-8 xl:col-span-8 sm:col-span-12 md:col-span-12 space-y-6'>
                {/* <h1 className='font-bold text-xl'>Shipping Address</h1> */}
                <div className='flex flex-col gap-3'>

                <h1 className='font-bold text-lg'>Personal Information</h1>
                <div className='flex sm:flex-col lg:gap-4 xl:gap-4 sm:gap-3 md:gap-3'>
                    <div className='flex flex-col flex-1 gap-2'>
                    <label className='text-lg text-gray-500' htmlFor="">First name</label>
                     <input className='border p-2 focus:outline-none shadow-sm' type="text" />  
                    </div>

                        <div className='flex flex-col flex-1 gap-2'>
                        <label className='text-lg text-gray-500 ' htmlFor="">Last name</label>
                        <input className=' shadow-sm border p-2 focus:outline-none' type="text" />
                        </div>
                </div>

                <div className='flex sm:flex-col lg:gap-4 xl:gap-4 sm:gap-3 md:gap-3'>
                    <div className='flex flex-col flex-1 gap-2'>
                    <label className='text-lg text-gray-500' htmlFor="">Email</label>
                     <input className=' shadow-sm border p-2 focus:outline-none' type="email" />  
                    </div>

                        <div className='flex flex-col flex-1 gap-2'>
                        <label className='text-lg text-gray-500' htmlFor="">Phone number</label>
                        <input className=' shadow-sm border p-2 focus:outline-none' type="number" />
                        </div>
                </div>

                <h1 className='font-bold text-lg'>Delivery Details</h1>
                <div className='flex sm:flex-col gap-4 lg:gap-4 xl:gap-4 sm:gap-3 md:gap-3'>
                    <div className='flex flex-col flex-1 gap-2'>
                    <label className='text-lg text-gray-500 ' htmlFor="">Location</label>
                     <input className='border p-2 focus:outline-none' type="text" />  
                    </div>

                        <div className='flex flex-col flex-1 gap-2'>
                        <label className='text-lg text-gray-500' htmlFor="">Building Name</label>
                        <input className=' shadow-sm border p-2 focus:outline-none' type="text" />
                        </div>
                </div>

                <div className='flex flex-col gap-3'>
                        <label className='text-lg text-gray-500' htmlFor="">Additional information (optional)</label>
                        <textarea className='p-2 lg:w-1/2 xl:w-1/2  shadow-sm border focus:outline-none' name="" id="" cols="5" rows="3"></textarea> 
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
                       
                    {/* <button className=' border py-3 text-white bg-teal-500 shadow-sm'>Proceed to shipping</button> */}
                        
                </div>

            </div>




{/* SECOND CONTAINER  */}

            <div className='shadow-sm lg:col-span-4 xl:col-span-4 sm:col-span-12 md:col-span-12  border rounded-sm text-sm px-3 py-5 space-y-4 h-fit'>
              {cart.map(item=>{
                return <>
                <div key={item.id} className='flex gap-2'>
                <img className='w-16 h-16 object-cover' src={`/images/${item.img}.jpg`} alt="img" />
                <div className='flex flex-col'>
                    <span className='font-medium'>{item.name}</span>
                    <span className='text-sm text-gray-500' >{item.price}</span>
                    
                </div>   
            </div>
            <hr/>
            </>
              })}  



                <div className='flex justify-between items-center'>
                <h3 className=' font-mono'>Sub-total</h3>
                <span className=' text-sm text-gray-500'>300 frs</span>
                </div>
                <div className='flex justify-between items-center'>
                <h3 className='font-mono'>Shipping</h3>
                <span className='text-sm text-gray-500'>100 frs</span>
                </div>
                <div className='flex justify-between items-center'>
                <h3 className='font-mono'>Discount</h3>
                <span className='text-sm text-gray-500'>500 frs</span>
                </div>
                <hr/>

                <div className='flex justify-between items-center '>
                <h3 className='font-medium text-lg'>Total </h3>
                <span className='font-medium text-lg'>300 frs</span>
                </div>

                    <button className='bg-amber-500 w-full py-3 text-white rounded flex justify-center items-center gap-1'>
                        
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
