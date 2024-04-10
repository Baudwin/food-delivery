import React, { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useCartStore } from '../../store/useCartStore'
import { useAuthStore } from '../../store/useAuthStore'
import {toast} from 'react-toastify'
 

export const Checkout = () => {
    const user = useAuthStore(state=>state.user)
    const navigate = useNavigate()

    useEffect(()=>{
        if (!user) {
    toast.error("You must sign in to continue!")
        setTimeout(() => {
           navigate("/login")  
        }, 4000);
        }
    }, [user])

    const location = useLocation().pathname

    const cart = useCartStore(state=>state.cart)
    const subTotal = useCartStore(state=>state.subTotal)
  

  return (
    <div>
 



        
        <div style={{backgroundImage:""}} className='p-14 bg-[url("/images/img-2.jpg")]  bg-cover flex justify-center items-center '>
            <h1 className='text-4xl font-bold  text-center text-white'> Checkout</h1>
        </div>
       

        <div className='container py-12 grid grid-cols-12 sm:px-3 md:px-4 gap-4'> 
        <div className=' lg:col-span-8 xl:col-span-8 sm:col-span-12 md:col-span-12 space-y-4'>
           <Outlet 
           subTotal={100}
           /> 
        </div>
        

{/* SECOND CONTAINER  */}

            <div className='shadow space-y-4 py-3 lg:col-span-4 xl:col-span-4 sm:col-span-12 md:col-span-12  border rounded-sm text-sm px-3  h-fit'>
                <h1 className='text-xl font-bold text-center'>Order Summary </h1>
                <div className='space-y-1'>
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

                <div className='space-y-3 py-'>

                <div className='flex justify-between items-center'>
                <h3 className=' text-[15px] text-slate-900'>Items Sub-total</h3>
                <span className=' text-sm text-gray-900'>{subTotal} XAF</span>
                </div>
                <div className='flex justify-between items-center'>
                <h3 className='font-thin'>Delivery Fee</h3>
                <span className='text-sm text-gray-600'>500 XAF</span>
                </div>
                <hr/>

                <div className='flex justify-between items-center '>
                <h3 className='font-medium text-lg'>Total </h3>
                <span className='font-medium text-lg text-blue-500'>{subTotal + 500} XAF</span>
                </div>

                <div className='flex justify-between items-center '>
                <h3 className='text-md'>Delivery by</h3>
                <span className='font-medium text-lg text-blue-500'></span>
                </div>

                </div>


            </div>

        </div>
        

    </div>
  )
}
