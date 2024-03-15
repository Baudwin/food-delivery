import React, { useEffect, useState } from 'react'
import { useCartStore } from '../store/useCartStore'
import { NavLink } from 'react-router-dom'


export default function ShoppingCart() {
  const cartItems = useCartStore(state=>state.cart)
  const removeFromCart = useCartStore(state=>state.removeFromCart)
  const increase = useCartStore(state=>state.increaseItemQuantity)
  const decrease = useCartStore(state=>state.decreaseItemQuantity)
  const clear = useCartStore(state=>state.clearCart)
  const total = useCartStore(state=>state.setTotal)

  const [qty, setQty] = useState()
  const removeItem = (item)=>{
    removeFromCart(item)
  }
 const date = new Date()

  const increaseQty = (item)=>{
    increase(item)
    setQty(item.quantity)
  }
  
  const decreaseQty = (item)=>{
    decrease(item)
    setQty(item.quantity)
  }


  
  return (
    <>
{/* <div style={{backgroundImage:""}} className=' p-14 bg-[url("/images/img-2.jpg")]  bg-cover flex justify-center items-center '>
            <h1 className='text-5xl font-bold  text-center text-white'>Shopping Cart</h1>
        </div> */}

    {
      // if 

      cartItems.length === 0 ?
      <div className= ' flex flex-col justify-center items-center gap-y-5'>
          <img className=' w-[350px]' src="/images/cart1.jpg" alt="" />
       <h1 className='text-3xl font-semibold text-amber-700'>
     your cart is empty...
    </h1>
   <NavLink to={'/menu'}> <button className=' text-gray-500 text-lg'>
   
    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left inline-block" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg> </span>
    Visit Menu
   </button></NavLink>
    </div>

// Else 
       : 

// else start 
<div className=''>

     <div className='lg:container xl:container grid grid-cols-12 gap-2  mx-auto py-10 lg:px-16 sm:px-1.5 md:px-4'>

      <div className=' overflow-auto border px- py-3 shadow-sm lg:col-span-9 xl:col-span-9 sm:col-span-12 md:col-span-12 h-fit'>
        <table className='w-full'>
            <thead className='text-left '>
                <tr className=' '>
                    <th className='font-semibold pb-2 px-2 text-lg text-black'>Description</th>
                    <th className='font-semibold pb-2 px-2 text-lg text-black'>Quantity</th>
                    <th className='font-semibold pb-2 px-2 text-lg text-black'>Total</th>
                    <th className='font-semibold pb-2 px-2 text-lg text-black'>Remove</th>
                </tr>
            </thead>
            <tbody className=''>
          {cartItems?.map(item=>{
            return   <tr key={item.id} className='border-t'>
           
            <td className='flex flex-col py-4 gap-1 px-3'>
                <img loading='lazy' decoding='async' fetchpriority='high' className='w-24 h-24 rounded-full object-cover' src={`/images/${item.img}.jpg`} alt="img" />
                <div className='flex flex-col px-4'>
                <span className=' text-md font-semibold'>{item.name}</span>
                <span className='text-gray-600 text-sm font-medium '>{item.price} CFA</span>
                </div>

            </td>
         
            <td className='px-2 '>
              <div className='flex items-center shadow-inner w-fit'>
              <button onClick={()=>{decreaseQty(item)}} className=' px-2 py-0.5 font-bold bg-gray-200 '>-</button>
              <button className=' px-2 py-0.5 text-md'>{item.quantity}</button>
              <button onClick={()=>increaseQty(item)} className=' px-2 py-0.5 text-white font-bold bg-slate-700 '>+</button>
              </div>
            </td>

     <td className='px-3'>
        <span className='text-black font-medium'>{item.price * item.quantity} </span>
     </td>

      <td className='px-6'>
        <button onClick={()=>removeItem(item)} className='rounded-sm border p-3 shadow'>
          <span>
          <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" className="bi bi-trash3 text-red-500 w-4 h-4" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
          </svg>
          </span>
        </button>            
     </td>

        </tr>
          })}
              

            </tbody>

        </table>
        
            {/* <div className='flex justify-between items-center p-2'>

            <NavLink to={'/menu'}> <button className=' text-gray-500 flex justify-center items-center space-x-1'>
              <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor" className="bi bi-arrow-left inline-block" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
             </span>
             <span >Continue Shopping</span>
              
              </button>
              </NavLink>

            <button onClick={()=>{clear()}} className='bg-red-500 px-2 py-2 text-white rounded shadow-sm'>Clear Cart</button>
            </div> */}
     
        </div>
     

<div className=' lg:col-span-3 xl:col-span-3 sm:col-span-12 md:col-span-12'>

<div className='space-y-2'>

  <div className='shadow-sm border p-4  h-fit'>
  <form className='space-y-2' action="">
  <h1 className='font-semibold text-lg underline'>Contact Details</h1>
  <div className='flex flex-col gap-2'>
  <label className='font-medium text-gray-500 text-sm' htmlFor="">Location <span className='text-red-600'>*</span> </label>
  <input className='rounded shadow p-2 focus:outline-none' type="text" placeholder='Enter Location' name="" id="" />

  <label className='font-medium text-gray-500 text-sm' htmlFor="">Tel <span className='text-red-600'>*</span> </label> 
  <input required className='rounded shadow p-2 focus:outline-none' type="text" placeholder='Enter phone number' name="" id="" />

  <h1 className='font-semibold text-lg underline'>Delivery Details</h1>

  <label className='font-medium text-gray-500 text-sm' htmlFor="">Date <span className='text-red-600'>*</span> </label> 
  <input className='rounded shadow p-2 focus:outline-none' type="date"  name="" id="" />

  <label className='font-medium text-gray-500 text-sm' htmlFor="">Time <span className='text-red-600'>*</span> </label> 
  <input className='rounded shadow p-2 focus:outline-none' type="time"  name="" id="" />

  <label className='font-medium text-gray-500 text-sm' htmlFor="">Aditional detail</label>
  <textarea className='rounded shadow border focus-visible:outline-none p-2' name="" id="" cols="30" rows="2"></textarea>
 </div>
 
   <button  className='text-white font-medium bg-green-500 px-3 py-1 rounded'>Save</button>
</form>
</div>

  {/* Checkout div  */}
<form action="">
<div className='shadow border p-5 lg:col-start-3 space-y-2 h-fit'>
  <h1 className='font-bold text-lg'>Order Summary</h1>
  
  <div className='flex justify-between'>
  <p className='font-medium'>Sub total</p>
  <span className='text-gray-600'>15000</span>
  </div>

  <div className='flex justify-between'>
  <p className='font-medium'>Shipping</p>
  <span className='text-gray-600'>500</span>
  </div>

  <div className='flex justify-between'>
  <p className='font-medium'>Discount</p>
  <span className='text-gray-600'>200</span>
  </div>
 
  <hr />

  <div className='flex justify-between'>
  <p className='font-medium'>TOTAL</p>
  <span className='text-gray-600'>15700 CFA</span>
  </div>

  <div className='flex justify-between'>
  <p className='font-medium'>Estimated delivery</p>
  <span className='text-gray-600'>{date.toLocaleTimeString() } </span>
  </div>
 
   <button disabled className='text-white font-medium bg-blue-500 p-2 w-full '>Place Order</button>

</div>

</form>

</div>
  
</div>


     </div>


</div>


    }






        
    </>
  )
}
