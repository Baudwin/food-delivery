import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (   <footer className='bg-slate-950 text-white mt-8'>
   
       
       <div className=' bg-slate-900 p-10 lg:px-16 lg:flex xl:flex justify-between items-center mb-10 sm:space-y-4 md:space-y-4'>
        <div className='space-y-2'>
        <h1 className=' text-4xl'> <span className='text-teal-400'>Lorem</span> <span>ipsum dolor sit amet?</span> </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eum.</p>
        </div>
        <div>                                                                                                                                                               
        <input className='p-2 focus:outline-none' type="text" name="" id="" />
        <button className='p-2 bg-teal-400 '>Subscribe</button>
        </div>
       
       </div>

 <div className=' lg:container xl:container mx-auto  lg:px-1'>
       <div className='grid sm:gap-5 md:gap-5 lg:grid-cols-4 xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-1 lg:px-7 lg:p-10 sm:px-5 md:px-5'>
        <div className=''>
            <h1 className='text-lg font-bold'>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ducimus sunt saepe culpa 
                </p>
        </div>

        <div>
            <h1 className='text-lg font-bold'>Useful links</h1>
            <ul className='text-gray-600'>
            <li><Link>Home</Link></li>
            <li><Link>Menu</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Login</Link></li>
            <li><Link>Cart</Link></li>
          </ul>
        </div>

        <div>
            <h1 className='text-lg font-bold'>Help?</h1>
          <ul className='text-gray-600'>
          <li><Link>Terms & Condition</Link></li>
            <li><Link> FAQ</Link></li>
            <li><Link> Documentation</Link></li>
            <li><Link>Support Policy</Link></li>
            <li><Link>Privacy</Link></li>

          </ul>
        </div>

        <div>
            <h1 className='text-lg font-bold'>Recent post</h1>
          
        </div>

       </div>


    </div>

    <div className='bg-gray-500 p-5'>
        <h1>Copyright © 2022 | Foodie. All Rights Reserved.</h1>
        <div>


        </div>

    </div>
    
    </footer>
  )
}
