import React, { useEffect, useState } from 'react'
import { useCartStore } from '../store/useCartStore'
import { NavLink } from 'react-router-dom'


export default function ShoppingCart() {
  const cartItems = useCartStore(state=>state.cart)
  const removeFromCart = useCartStore(state=>state.removeFromCart)
  const increase = useCartStore(state=>state.increaseItemQuantity)
  const decrease = useCartStore(state=>state.decreaseItemQuantity)
  const clear = useCartStore(state=>state.clearCart)
  const [qty, setQty] = useState()

  const removeItem = (item)=>{
    removeFromCart(item)
  }

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

     <div className='lg:container xl:container grid grid-cols-12 gap-2  mx-auto py-10 lg:px-20 sm:px-1.5 md:px-4'>

      <div className=' overflow-auto border px-2 py-3 shadow lg:col-span-9 xl:col-span-9 sm:col-span-12 md:col-span-12 h-fit'>
        <table className='w-full'>
            <thead className='text-left '>
                <tr className=' '>
                    <th className='font-semibold pb-2 px-2 text-lg'>Description</th>
                    <th className='font-semibold pb-2 px-2 text-lg'>Quantity</th>
                    <th className='font-semibold pb-2 px-2 text-lg'>Total</th>
                    <th className='font-semibold pb-2 px-2 text-lg'>Remove</th>
                </tr>
            </thead>
            <tbody className=''>
          {cartItems?.map(item=>{
            return   <tr key={item.id} className='border-t-2 border-b-2'>
           
            <td className='flex flex-col py-4 gap-1 '>
                <img className='w-24 h-24 rounded-full object-cover' src={`/images/${item.img}.jpg`} alt="img" />
                <div className='flex flex-col px-4'>
                <span className='text-gray-700 text-md font-semibold'>{item.name}</span>
                <span className='text-gray-600 text-sm font-medium '>{item.price} CFA</span>
                </div>

            </td>
         
            <td className='px-2'>
                <button onClick={()=>increaseQty(item)} className=' cursor-pointer px-2 py-0.5 text-white font-bold bg-slate-700 rounded-full'>+</button>
                <button className=' cursor-pointer px-2 py-1'>{item.quantity}</button>
                <button onClick={()=>{decreaseQty(item)}} className=' cursor-pointer px-2 py-0.5 font-bold bg-gray-200 rounded-full'>-</button>
            </td>

     <td className='px-3'>
        <span className='text-blue-500'>{item.price * item.quantity} </span>
     </td>

      <td className='px-5'>
        <button onClick={()=>removeItem(item)} className='border cursor-pointer px-2.5 py-1  hover:bg-amber-200 '>
            x
        </button>            
     </td>

        </tr>
          })}
              

            </tbody>

        </table>
        
            <div className='flex justify-between items-center p-2'>

            <NavLink to={'/menu'}> <button className=' text-gray-500 text-lg'>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left inline-block" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg> </span>
              Continue Shopping
              </button>
              </NavLink>

            {/* <button onClick={()=>{clear()}} className='bg-red-500 px-2 py-2 text-white rounded shadow-sm'>Clear Cart</button> */}
            </div>
     
        </div>
     

<div className=' lg:col-span-3 xl:col-span-3 sm:col-span-12 md:col-span-12'>

<div className='space-y-2'>

  <div className='shadow border p-4  h-fit'>
  <form className='space-y-2' action="">
  <h1 className='font-bold text-lg'>Address Details</h1>
  <div className='flex flex-col gap-2'>
  <label className='font-medium text-gray-700' htmlFor="">Location <span className='text-red-600'>*</span> </label>
  <input className='rounded shadow p-2 focus:outline-none' type="text" placeholder='Enter Location' name="" id="" />

  <label className='font-medium text-gray-700' htmlFor="">Tel <span className='text-red-600'>*</span> </label> 
  <input required className='rounded shadow p-2 focus:outline-none' type="text" placeholder='Enter phone number' name="" id="" />

  <label className='font-medium text-gray-700' htmlFor="">Date <span className='text-red-600'>*</span> </label> 
  <input className='rounded shadow p-2 focus:outline-none' type="date"  name="" id="" />

  <label className='font-medium text-gray-700' htmlFor="">Time <span className='text-red-600'>*</span> </label> 
  <input className='rounded shadow p-2 focus:outline-none' type="time"  name="" id="" />

  <label className='font-medium text-gray-700' htmlFor="">Aditional detail</label>
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
  <p>Price</p>
  <span>200CAF</span>
  </div>

  <div className='flex justify-between'>
  <p>Shipping</p>
  <span>200CAF</span>
  </div>

  <div className='flex justify-between'>
  <p>Discount</p>
  <span>200CAF</span>
  </div>

  <div className='flex justify-between'>
  <p>Coupon Applied</p>
  <span>200CAF</span>
  </div>
 
  <hr />

  <div className='flex justify-between'>
  <p>TOTAL</p>
  <span>200CAF</span>
  </div>

  <div className='flex justify-between'>
  <p>Estimated delivery</p>
  <span>200CAF</span>
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
