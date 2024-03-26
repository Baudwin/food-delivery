import React from 'react'
import { Sidebar } from '../components/admin/Sidebar'
import { Outlet } from 'react-router'

export const AdminDashboardLayout = () => {
  return (
    <>
<div className="py-12 bg-[url('/images/img-2.jpg')]  bg-cover  flex justify-center items-center">
<h1 className=" text-3xl font-bold text-white">Admin Panel</h1>
</div>


    
    <div className='pt-5 pb-16 lg:px-12 xl:px-12 md:px-10 sm:px-5'>

    <div className=' flex justify-start py-2'>
        <h1 className='font-medium text-lg'><span className=''>Hello,</span> Admin <span className='text-blue-500 uppercase'>Baudwin</span> </h1>
    </div>

        <div className=' grid grid-cols-12 gap-3 '>
        <nav className='col-span-3  shadow border h-fit sm:hidden md:hidden'>
            {/* <h1 className='text-white font-bold text-2xl text-center p-3 bg-slate-900'>Menu</h1> */}
          <Sidebar/>    
        </nav>

  <main className='lg:col-span-9 xl:col-span-9 sm:col-span-12 md:col-span-12 shadow border p-3 '>
    <Outlet/>
  </main>
        
    </div>

 </div>
    </>
  )
}
