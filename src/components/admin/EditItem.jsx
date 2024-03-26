import React from 'react'
import { useParams } from 'react-router'
import { useSingleItemData } from '../../hooks/useItemSingleItemData'
import { Link } from 'react-router-dom'
export const EditItem = () => {

    const {itemID} = useParams()

    const {data, isLoading,isError,error} = useSingleItemData(itemID)
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>{error.message}</h1>
    }
  return (
    <div>
        <div className=''>
        <Link to={'/admin-dashboard/items'} className='text-lg bg-gray-100  border py-1 px-4 shadow'>Back</Link>
        </div>

    <div className='py-3'>
    <h1 className='text-xl font-semibold w-fit text-teal-500'>Edit "{data?.data.itemName}"</h1>
    <form  action="">
        <div className='grid grid-cols-2 gap-4'>
          <img className='h-64 w-full object-cover' src={`http://localhost:3005/${ data?.data.img}` } alt="" />
        <div className='space-y-3'>
          <div className='flex flex-col'>
        <label htmlFor="">Item Name</label>
        <input className='bg-gray-100 p-2 focus:outline-none' value={data?.data.itemName} type="text" name="" id="" />
        </div>
        <div className='flex flex-col'>
        <label htmlFor=""> Price</label>
        <input className='bg-gray-100 p-2 focus:outline-none' value={data?.data.price} type="number" name="" id="" />
        </div>
        <div className='flex flex-col space-y-1 focus:outline-none'>
        <label htmlFor="">Category</label>
       <select className='bg-gray-100 py-2' name="" id="">
        <option value="">Food</option>
        <option value="">Drinks</option>
        <option value="">Snacks</option>
        <option value="">Desert</option>
       </select>
        </div>   
        </div>  
        </div>
      <div className='flex justify-end gap-3 py-2'>
      <button className='border-2 border-blue-500 text-blue-500 p-3 shadow rounded'>Update</button>
        <button className='border-2 border-red-500 text-red-500 p-3 shadow rounded hover:bg-red-500 hover:text-white'>Delete</button>
      </div>
        
    </form>
    </div>

    </div>
  )
}
