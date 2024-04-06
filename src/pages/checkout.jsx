import React, { useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useCartStore } from '../store/useCartStore'
 

export const Checkout = () => {
    const location = useLocation().pathname
    const cart = useCartStore(state=>state.cart)
    const subTotal = useCartStore(state=>state.subTotal)

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
                
            <Outlet/>

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
{
    location ==="/checkout/payment" ? 

                    <button  onClick={placeOrder} className='bg-amber-500 w-full py-3 text-white rounded flex justify-center items-center gap-1'>
                        
                       <span>Place Order</span> 
                       <span> 
                       <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="currentColor" className="bi bi-arrow-right-short mt-0.5" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                        </svg>
                       </span>
                        </button>
: null
}
            </div>

        </div>
        

    </div>
  )
}
