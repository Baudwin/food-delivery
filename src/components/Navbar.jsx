import React, { useState } from 'react'
import { useCartStore } from '../store/useCartStore'
import { NavLink } from 'react-router-dom'


export default function Navbar() {
const cart = useCartStore(state=>state.cart)

const [show, setShow] = useState(false)

const display = ()=>{
  show ? setShow(false) : setShow(true)
}



  return (
    <div>
    
        <header className=' bg-slate-950  text-white '>

            <nav className='flex lg:justify-around md:justify-between sm:justify-between items-center py-5 sm:px-4 md:px-4 '>

                  <h1 className='text-3xl font-bold'>FOODIE</h1>
   
                <div className='flex gap-4 sm:hidden md:hidden'>
                <NavLink className='text-lg'>Home</NavLink>
                 <NavLink to={'menu'} className=' text-lg'>Menu</NavLink>
                   <NavLink className='text-lg'>About</NavLink>
                   <NavLink className='text-lg'>Contact</NavLink>
                </div>


        <div className='space-x-2 flex items-center justify-center'>
        <div className='relative '>
            <NavLink to={'/shopping-cart'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag hover:cursor-pointer" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
            <span className='absolute bottom-2 left-2.5 w-5 h-5 bg-red-500 text-white font-semibold flex justify-center items-center text-xs rounded-full '>{cart.length}</span>
            </NavLink>
         </div>
           
              <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
          </svg>
              </div>
            </div>

            <button onClick={display} className={`lg:hidden sm:flex bg-gray-600 p-2.5 shadow ${show ? 'focus:border border-white': null}  `}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list font-bold" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
  
            </button>

            </nav>

            <div className={`${show ?'flex' : 'hidden'} lg:hidden flex-col justify-center absolute bg-slate-950 w-full `}>
             <NavLink className={`py-4 text-sm px-5 hover:bg-white hover:text-black`}>Home </NavLink>
             <NavLink to={'menu'}  className={`py-4 text-sm px-5 hover:bg-white hover:text-black`}> Menu</NavLink>
             <NavLink  className={`py-4 text-sm px-5 hover:bg-white hover:text-black`}> About </NavLink>
             <NavLink  className={`py-4 text-sm px-5 hover:bg-white hover:text-black`}>Contact </NavLink>
            </div>

        </header>      
    </div>
  )
}
