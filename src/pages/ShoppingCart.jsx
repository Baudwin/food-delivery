import React, { useEffect, useState } from 'react'
import { useCartStore } from '../store/useCartStore'
import { Link, NavLink } from 'react-router-dom'


export default function ShoppingCart() {
  const cartItems = useCartStore(state=>state.cart)
  const removeFromCart = useCartStore(state=>state.removeFromCart)
  const increase = useCartStore(state=>state.increaseItemQuantity)
  const decrease = useCartStore(state=>state.decreaseItemQuantity)
  const clear = useCartStore(state=>state.clearCart)
  const subTotal = useCartStore(state=>state.subTotal)
  const setCartTotal = useCartStore(state=>state.setTotal)

  const [qty, setQty] = useState()

  useEffect(()=>{
    setCartTotal()
  }, [cartItems,qty])

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
<div style={{backgroundImage:""}} className='p-14 bg-[url("/images/img-2.jpg")]  bg-cover flex justify-center items-center '>
            <h1 className='text-4xl font-bold  text-center text-white'> Cart</h1>
        </div>

    {
      // if 

      cartItems.length === 0 ?
      <div className= ' flex flex-col justify-center items-center gap-y-5'>
          <img className=' w-[300px]' src="/images/cart1.jpg" alt="" />
       <h1 className='text-3xl font-bold text-amber-700'>
     Your cart is empty
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

   <div className='lg:container xl:container py-10 sm:px-2.5 md:px-4'>

      <div className=' overflow-auto border px- py-3 shadow lg:col-span-12 xl:col-span-12 sm:col-span-12 md:col-span-12 h-fit'>
        <table className='w-full'>
            <thead className='text-left '>
                <tr className=' '>
                    <th className='font-semibold pb-2 px-2 text-lg text-black'>Item</th>
                    <th className='font-semibold pb-2 px-2 text-lg text-black'>Quantity</th>
                    <th className='font-semibold pb-2 px-2 text-lg text-black'>Total</th>
                    <th className='font-semibold pb-2 px-2 text-lg text-black'>Remove</th>
                </tr>
            </thead>
            <tbody className=''>
          {cartItems?.map(item=>{
            return   <tr key={item._id} className='border-t'>
           
            <td className='flex flex-col py-4 px-2.5'>
              
                <img loading='lazy' decoding='async' fetchpriority='high' className='w-20 h-20 object-cover' src={`http://localhost:3005/${item?.img}`} alt="img" />
                <div className='flex flex-col'>
                <span className=' text-md font-semibold'>{item.itemName}</span>
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
     



<div className=' grid grid-cols-12 gap-4 py-12'>

<div className='lg:col-span-6 xl:col-span-6 md:col-span-12 sm:col-span-12 space-y-3'>
<h1 className='text-xl font-bold'>Coupon Code</h1>
  <div className=' border rounded-sm shadow p-6 space-y-2'>
    <p className='text-gray-500 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis voluptas maiores impedit officia.</p>
    <div className='flex'>
      <input className=' focus:outline-none p-2 w-full border-y border-l' type="text" name="" id="" />
    <button className=' p-2 bg-amber-500 text-white'>Apply</button>
    </div>
  </div>
  
  </div>


<div className='lg:col-span-6 xl:col-span-6 md:col-span-12 sm:col-span-12 space-y-3'>
  <h1 className='font-bold text-xl'>Total Bill</h1>

  <div className='border rounded-sm shadow'>
  <div className='p-6'>
  <div className='flex justify-between items-center'>
    <h3 className=' font-bold'>Cart Subtotal</h3>
    <span className='font-semibold '>{subTotal} CAF</span>
  </div>
  <div className='flex justify-between items-center'>
    <h3 className='text-gray-700 text-sm'>Shipping Charge</h3>
    <span className='font-thin text-sm'>{500} CAF</span>
  </div>  
  </div>
<div className='flex justify-between items-center border-t-2 px-6 py-3'>
  <h3 className='font-bold'>Total Amount</h3>
  <span className='font-semibold'>{subTotal + 500} CAF</span>
</div>

 </div>

<div className=''>
 <Link to={'/checkout'}>
<button className='w-full bg-amber-500 py-3 shadow rounded-sm text-white'>Proceed to Checkout</button>
</Link> 
</div>

</div>


  
</div>


     </div>



    }






        
    </>
  )
}
