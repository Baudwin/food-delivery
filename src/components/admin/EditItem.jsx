import React from 'react'
import { useParams } from 'react-router'
import { useSingleItemData } from '../../hooks/useItemSingleItemData'
import { Link } from 'react-router-dom'
import { useDeleteItem } from '../../hooks/useItemsData'
import { useCategoryData } from '../../hooks/useCategoryData'
import { PulseLoader } from 'react-spinners'



export const EditItem = () => {
  const { data:categories } = useCategoryData()
    const {itemID} = useParams()
    const {mutate, isPending:deleting, isError:deletionError} = useDeleteItem()

    const {data, isLoading,isError,error} = useSingleItemData(itemID)

    if (isLoading) {
      return <div className=' flex gap-2 items-center'>
        <h1 className='text-xl'>Loading </h1>
        <PulseLoader/>
      </div> 
  }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const deleteItem = (e)=>{
      e.preventDefault()
      mutate(itemID)
    }

  return (
    <div>
        <div className='py-4'>
        <Link to={'/admin-dashboard/items'} className='text-lg bg-gray-100  border py-1 px-4 shadow'>Back</Link>
        </div>

    <div className=''>
    <h1 className='text-xl font-semibold w-fit text-teal-500'>Edit "{data?.data.itemName}"</h1>
    <form  action="">
        <div className='grid grid-cols-12 gap-4'>
          <img className='h-72 w-full col-span-4 object-cover' src={data?.data.img.url} alt="" />
        <div className='space-y-3 col-span-8 '>
          <div className='flex flex-col'>
        <input className='bg-gray-100 p-3 focus:outline-none' value={data?.data.itemName} type="text" name="" id="" />
        </div>
        <div className='flex flex-col'>
        <input className='bg-gray-100 p-3 focus:outline-none' value={data?.data.price} type="number" name="" id="" />
        </div>
        <div className='flex flex-col space-y-1 focus:outline-none'>
        <select   className=' p-3 focus:outline-none bg-gray-100 capitalize text-blue-500 font-medium' name="category" id="">
        {/* <option className='' value="">Select Category</option> */}
        {categories?.data.map(category=>{
          return <option className='font-medium' key={category._id} value={(category._id)}>{category.categoryName}</option>
        })}
        
       </select>
        </div>   
        </div>  
        </div>
      <div className='flex justify-end gap-3 py-2'>
      <button className='border-2 border-blue-500 text-blue-500 p-3 shadow rounded hover:bg-blue-500 hover:text-white'>Update</button>
        <button onClick={deleteItem} className='border-2 border-red-500 text-red-500 p-3 shadow rounded hover:bg-red-500 hover:text-white'>Delete</button>
      </div>
        
    </form>
    </div>

    </div>
  )
}
