import React, { useState } from 'react'
import { FaMoneyCheckDollar } from 'react-icons/fa6'
import {useParams , useNavigate} from 'react-router-dom'
import { useCartStore } from '../../store/useCartStore'
import { usePlaceOrder } from '../../hooks/useOrderData'
import {toast} from 'react-toastify'
import {PulseLoader, PropagateLoader, ClipLoader} from 'react-spinners'
import { FaCheck, FaCheckCircle } from 'react-icons/fa'



export const Payment = () => {
 const {mutate,  isError, error, isSuccess} = usePlaceOrder()
const [showLoading, setShowLoading] = useState(false);
const {addressID} = useParams()
const navigate = useNavigate()
const cart = useCartStore(state=>state.cart)
const subTotal = useCartStore(state=>state.subTotal)
const clearCart = useCartStore(state=>state.clearCart)
const [paymentType, setPaymentType] = useState(null)


const orderDetails = {
  items : cart, 
  address: addressID,
  totalAmount: subTotal + 500, 
  paymentType
}

const placeOrder = ()=>{
  if (cart.length <1) {
    toast.warning("Your cart is empty")
    setTimeout(() => {
      navigate("/menu")
    }, 3000);
  }
  
  else{
 if (!paymentType) {
  toast.warning("Please select a payment method")
 }
 else{
  setShowLoading(true)
  setTimeout(() => {
    mutate(orderDetails)
    setShowLoading(false)
    localStorage.removeItem("cart")
  }, 3000);
clearCart()
 }    
  }


}

if (isSuccess) {
  setTimeout(() => {
    navigate('/profile/orders')
  }, 1500);
}

  return (
    <>

{

  showLoading? 

  <div className='fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-90 z-50'>
            
            <ClipLoader
            className='loader'
            size={60}
            />
        </div>

: 
null
}

{
  isSuccess ? 

<div className='fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-90 z-50'>
      <div className='space-y-3 bg-white py-9 px-16 shadow-lg rounded flex flex-col items-center justify-center'>
        <span className='bg-green-500 rounded-full p-5'>
        <FaCheck   style={{
      color: "#ffffff",
    }}/>
        </span>
        <h1 className='font-bold text-green-500 text-2xl'>
            Order Successful
          </h1>
          <p className='text-gray-500 text-sm'>Thank you so much for your order</p>
      </div>
         
        </div>

        : 
        null
}

    

    <div className='space-y-4'>
        <h1 className='font-bold text-xl'>Payment Options</h1>
<div className='grid grid-cols-2 sm:grid-cols-1 gap-3'>
        <div className=' p-3 flex justify-between items-center gap-1 text-white font-semibold bg-gray-400  rounded'>
          <div>
            <FaMoneyCheckDollar className='inline w-5 h-5'/>
          <label className='p-2 cursor-pointer w-full h-full' htmlFor="paymentMethod">Payment on delivery</label>

          </div>
     
        <input onChange={(e)=>{setPaymentType(e.target.value)}} className='w-5 h-5 ' type="radio" value={"payment on delivery"} name="payment" id="paymentMethod" />
        </div>

        <div className=' p-3 flex justify-between items-center gap-1 text-white font-semibold bg-yellow-400  rounded'>
          
          <div>
            <img className='w-10 h-7 inline' src="https://seeklogo.com/images/M/mtn-mobile-money-logo-AD1D8B5CE4-seeklogo.com.png" alt="" />
          <label className='p-2 cursor-pointer w-full h-full line-through' htmlFor="paymentMethod">MTN mobile Money</label>
          </div>
          <input disabled className='w-5 h-5 ' type="radio" name="" id="paymentMethod" />
        </div>

        <div className=' p-3 flex justify-between items-center gap-1 text-white font-semibold bg-orange-400  rounded'>
          <div>
            <img className='w-10 h-7 inline' src="https://th.bing.com/th/id/R.6104c66cbe750ccc2ead09859b57e9fd?rik=XsZ%2fRZPxpIvqFg&pid=ImgRaw&r=0" alt="" />
          <label className='p-2 cursor-pointer w-full h-full line-through' htmlFor="paymentMethod">Orange mobile Money</label>
          </div>
          <input disabled className='w-5 h-5 ' type="radio" name="" id="paymentMethod" />
        </div>



</div>

<div className='flex justify-end pt-10'>

<button onClick={placeOrder} className='bg-teal-500 p-4 w-1/2 text-white font-bold text-lg rounded'>Proceed</button>
</div>

    </div>

    </>
  )
}
