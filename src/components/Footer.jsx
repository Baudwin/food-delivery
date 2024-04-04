import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (   <footer className='bg-amber-100  space-y-7'>

<div className='container '>
   <div className='flex sm:flex-col sm:gap-4 sm:items-start justify-between items-center py-10 sm:py-5'>
    <h1 className='font-bold text-2xl'>Subscribe to Newsletter</h1>
    <div className='flex gap-2 shadow rounded-lg p-3'>
      <input className='bg-amber-100 focus:outline-none' placeholder='Enter your email address' type="text" name="" id="" />
      <button className='bg-red-600 text-white rounded px-3 py-1'>Subscribe</button>
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
    <p className='text-gray-800'>Monday - Friday 8AM-6PM</p>
    <p className='text-gray-800'>Saturday - Sunday 11AM-5PM</p>
  </div>

  <div className='flex flex-col items-center sm:items-start sm:text-left text-sm'>
    <h1 className='font-bold text-lg'>Quick Links</h1>
    <Link className='text-gray-800'>Home</Link>
    <Link className='text-gray-800'>Menu</Link>
    <Link className='text-gray-800'>Shopping Cart</Link>
  </div>

</div>

</div>


<div className='bg-amber-200 text-center py-3'>
  <h1>ALL RIGHTS RESERVED baudwin12@gmail.com</h1>

</div>


       
    
    </footer>
  )
}
