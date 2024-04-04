import React, { useEffect, useState } from 'react'
import { useItemsData } from '../../hooks/useItemsData'
import { Link } from 'react-router-dom'
import { PulseLoader } from 'react-spinners'

export const AllItems = () => {
    const {isLoading, data:items, isFetching, isError, error} = useItemsData()

if (isLoading) {
    return <div className=' flex gap-2 items-center'>
      <h1 className='text-xl'>Loading items </h1>
      <PulseLoader/>
    </div> 
}




  return (
    <>
    
        <div className='container flex justify-between items-center py-2'>

        <Link to={''} className='text-xl  font-bold text-black '>All Items</Link>
        <Link to={'add-item'}>
          <button className='bg-teal-600 text-white p-2 shadow'>Add New Item</button>
        </Link>
      
        </div>
   
    <div className='grid grid-cols-4 gap-1 py-3'>
    {items?.data.map(item=>{
  return <Link key={item._id} className='' to={`edit-item/${item._id}`}>
      <img className='h-52 w-full object-cover' src={item.img.url} alt="" />
      <div className='flex justify-between items-center gap-4'>
        <h1 className=' font-semibold'>{item.itemName}</h1> 
        {/* <p className='text-gray-700'>{item.price}</p> */}
      </div>
  </Link>
 
})} 
</div>
 </>
  )
}
