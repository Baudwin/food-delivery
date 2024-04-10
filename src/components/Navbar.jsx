import React, { useState } from 'react'
import { useCartStore } from '../store/useCartStore'
import { NavLink } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { FaUserLarge } from 'react-icons/fa6'


export default function Navbar() {
const cart = useCartStore(state=>state.cart)

const [show, setShow] = useState(false)

const display = ()=>{
   setShow(!show)
}

const toggleNav = ()=>{
setShow(!show)
}

  return (
    <div className=' sticky top-0'>
    
        <header className=' bg-black  text-white '>

            <nav className='flex lg:justify-around md:justify-between sm:justify-between items-center py-4 sm:px-4 md:px-4 '>

                  <h1 className='text-3xl font-bold text-teal-400 '>FOODIE</h1>
   
                <div className='flex gap-4 sm:hidden md:hidden'>
                <NavLink to={'/'} className=''>Home</NavLink>
                 <NavLink to={'menu'} className=' '>Menu</NavLink>
                   <NavLink to={'about'} className=''>About</NavLink>
                   <NavLink to={'contact'} className=''>Contact</NavLink>
                </div>


        <div className='space-x-3 flex items-center'>
        <NavLink to={'/profile'} className=''>
             <FaUserLarge className='w-5 h-5'/>
              </NavLink>

        <div className='relative '>
            <NavLink to={'/shopping-cart'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag hover:cursor-pointer" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
            <span className='absolute bottom-2 left-2.5 w-6 h-6 bg-red-500 text-white font-semibold flex justify-center items-center text-xs rounded-full'>{cart.length}</span>
            </NavLink>
         </div>
           
            </div>

            <button onClick={display} className={`lg:hidden sm:flex bg-gray-600 p-3 shadow ${show ? 'focus:border border-white': null}  `}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-list font-bold" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
          </svg>
  
            </button>

            </nav>

            <div className={`${show ?'flex' : 'hidden'} lg:hidden flex-col justify-center items-center absolute bg-gray-900 bg-opacity-100 w-full `}>
             <NavLink onClick={toggleNav} to={'/'} className={`py-4 w-full text-center text-sm px-5 hover:bg-white hover:text-black`}>Home </NavLink>
             <NavLink onClick={toggleNav} to={'menu'}  className={`py-4 w-full text-center text-sm px-5 hover:bg-white hover:text-black`}> Menu</NavLink>
             <NavLink onClick={toggleNav} to={'about'}  className={`py-4 w-full text-center text-sm px-5 hover:bg-white hover:text-black`}> About </NavLink>
             <NavLink onClick={toggleNav} to={'contact'}  className={`py-4 w-full text-center text-sm px-5 hover:bg-white hover:text-black`}>Contact </NavLink>
            </div>

        </header>      
    </div>
  )
}
