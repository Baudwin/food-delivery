import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'

export default function RootLayout() {
  return (
    <>
    <div className=''>
        <Navbar/>
        {/* <ScrollToTop/> */}
        <Outlet/>

        <Footer/>
        
    </div>
    </>
  )
}
