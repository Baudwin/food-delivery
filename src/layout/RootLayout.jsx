import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RootLayout() {
  return (
    <div className='bg-amber-50'>
        <Navbar/>
        <Outlet/>

        <Footer/>
        
    </div>
  )
}
