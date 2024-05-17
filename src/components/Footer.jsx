import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (   <footer className='bg-black text-white  space-y-7 '>

<div className='container sm:px-7 md:px-10 '>
   <div className='flex sm:flex-col sm:gap-4 sm:items-start justify-between items-center py-10 sm:py-5'>
    <h1 className='font-bold text-2xl'>Subscribe to Newsletter</h1>
    <div className='flex gap-2 shadow border rounded-lg p-3'>
      <input className='bg-black focus:outline-none' placeholder='Enter your email address' type="text" name="" id="" />
      <button className='bg-amber-500 text-white rounded px-3 py-1'>Subscribe</button>
    </div>
   </div>
<hr className=''/>


<div className='pt-10 grid grid-cols-3 sm:grid-cols-1 sm:gap-4  text-sm'>
  <div className='text-center sm:text-left'>
    <h1 className='text-xl font-bold'>FOODIE.</h1>
    <p>Lorem ipsum dolor sit amet consect</p>
    <p>Lorem ipsum dolor sit.</p>
    <div></div>
  </div>

  <div className='text-sm text-center sm:text-left'>
    <h1 className='font-bold text-lg'>Opening Hours</h1>
    <p className='text-gray-400'>Monday - Friday 8AM-6PM</p>
    <p className='text-gray-400'>Saturday - Sunday 11AM-5PM</p>
  </div>

  <div className='flex flex-col items-center sm:items-start sm:text-left text-sm'>
    <h1 className='font-bold text-lg'>Quick Links</h1>
    <Link className='text-gray-400'>Home</Link>
    <Link className='text-gray-400'>Menu</Link>
    <Link className='text-gray-400'>Shopping Cart</Link>
  </div>

</div>

</div>


<div className='bg-black text-center py-3'>
  <h1>copyright baudwin12@gmail.com | All Rights Reserved</h1>

</div>


       
    
    </footer>
  )
}
