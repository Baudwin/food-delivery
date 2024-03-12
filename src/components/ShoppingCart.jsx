import React from 'react'
import { useCartStore } from '../store/useCartStore'
import { NavLink } from 'react-router-dom'


export default function ShoppingCart() {
  const cartItems = useCartStore(state=>state.cart)
  const removeFromCart = useCartStore(state=>state.removeFromCart)

  const removeItem = (item)=>{
    removeFromCart(item)
  }

  
  return (
    <>
<div style={{backgroundImage:""}} className=' p-14 bg-[url("/images/img-2.jpg")]  bg-cover flex justify-center items-center '>
            <h1 className='text-5xl font-bold  text-center text-white'>Shopping Cart</h1>
        </div>

    {
      // if 

      cartItems.length === 0 ?
      <div className= ' flex flex-col justify-center items-center gap-y-5'>
          <img className=' w-[350px]' src="images/cart1.jpg" alt="" />
       <h1 className='text-3xl font-semibold text-amber-700'>
     Oops! your cart is empty...
    </h1>
   <NavLink to={'/home'}> <button className=' text-gray-500 text-lg'>
   
    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left inline-block" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg> </span>
    Continue Shopping
   </button></NavLink>
    </div>

// Else 
       : 

// else start 
<div>


     <div className='lg:container xl:container mx-auto py-10 lg:px-20'>

      <div className='grid grid-cols-12 gap-3'>

        <table className='w-full lg:col-span-9 xl:col-span-9 md:col-span-12 sm:col-span-12'>
            <thead className='text-left'>
                <tr className=''>
                    <th className=''>Description</th>

                    <th className=''>Quantity</th>
                    <th className=''>Total</th>
                    <th className=''>Remove</th>
                </tr>
            </thead>
            <tbody className=''>
          {cartItems?.map(item=>{
            return   <tr key={item.id} className='border-b-2 border-t-2'>
            <td className='flex items-center flex-col py-6 gap-1'>
                <img className='w-16 h-16' src={`images/${item.img}.jpg`} alt="img" />
                <span className='text-gray-700 text-md font-semibold'>{item.name}</span>
                <span className='text-gray-600 text-sm font-medium '>{item.price} CFA</span>
            </td>
         
            <td className=''>
                <span className=' cursor-pointer px-2 py-1 text-white font-bold bg-slate-700 rounded-full'>+</span>
                <span className=' cursor-pointer px-2 py-1'>{item.quantity}</span>
                <span className=' cursor-pointer px-2 py-1 font-bold bg-gray-200 rounded-full '>-</span>
            </td>

     <td>
        <span className='text-blue-300'>{item.price} CFA</span>
     </td>

      <td>
        <button onClick={()=>removeItem(item)} className='border font-bold cursor-pointer px-2 py-1 bg-white shadow'>
            x
        </button>            
     </td>

        </tr>
          })}
              

            </tbody>

        </table>

     





  {/* Checkout div  */}

<div className='shadow-md border lg:col-span-3 md:col-span-12 sm:col-span-12 p-4 space-y-2'>
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
  

  
 
   <button className='text-white font-medium bg-blue-500 p-2 w-full'>Proceed to Checkout</button>

</div>


     
</div>


     </div>

<div className='container mx-auto space-y-6 px-10'>

<div className='flex justify-between items-center'>
<h1 className='text-xl font-semibold text-left'>Image</h1>
  <h1 className='text-xl font-semibold text-left'>Name</h1>
  <h1 className='text-xl font-semibold text-left'>Age</h1>
  <h1 className='text-xl font-semibold text-left'>Gender</h1>
  <h1 className='text-xl font-semibold text-left'>Class</h1>
</div>

<div className='flex justify-between'>
<img className='w-14 h-14' src="images/img-3.jpg" alt="" />
  <h1>Titah</h1>
  <h1>24</h1>
  <h1>male</h1>
  <h1>year 2</h1>
</div>

<div className='flex justify-between'>
<img className='w-14 h-14' src="images/img-2.jpg" alt="" />
  <h1 className='text-left'>Baudwin</h1>
  <h1>25</h1>
  <h1>male</h1>
  <h1>year 3</h1>
</div>
  
</div>

</div>


    }






        
    </>
  )
}
