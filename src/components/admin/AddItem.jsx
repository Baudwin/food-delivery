import React, { useState } from 'react'
import { useAddItem } from '../../hooks/useItemsData'
import { useCategoryData } from '../../hooks/useCategoryData'
import ClipLoader from "react-spinners/ClipLoader";


export const AddItem = () => {
 const {mutate, isError,data, isPending, error} = useAddItem()
 const { data:categories } = useCategoryData()

    const [img, setImg] = useState("")
    const [itemInfo, setItemInfo] = useState({
      itemName:"", 
      price: "",
      category: ""
    })

    const handleImageChange = (e)=>{
      const {files} = e.target
       setImg(files[0]);
    }

    const handleInfoChange = (e)=>{
      const {name,value} = e.target
      setItemInfo({...itemInfo, [name]:value})
    }

    const formData = new FormData()
    formData.append("img", img)
    formData.append("itemName", itemInfo.itemName)
    formData.append("price", itemInfo.price)
    formData.append("category", itemInfo.category)


    const addItem = (e)=>{
      e.preventDefault()
      mutate(formData)
      
    }
   


  return (
    <div className=''>
    <h1 className='text-lg font-bold py-2'>Add New Item</h1>
    <form className='' onSubmit={addItem}  action="">
        <div className='grid grid-cols-12 gap-3'>
        
            <label  className='col-span-4 cursor-pointer' htmlFor="img">
                {
                    img ? <img className='h-96  w-full object-cover' src={URL.createObjectURL(img)} alt="" />
                    : 
            <div className='bg-gray-50 flex justify-center items-center h-full'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-images text-gray-200 w-28 h-28" viewBox="0 0 16 16">
            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/>
            </svg>
            <input onChange={handleImageChange} hidden className='p-10' type="file" name="" id="img"/>
            </div>
                }
                
                {img ? 
                <button  onClick={(e)=>{
                    e.preventDefault()
                    setImg(null)
                    }} className='bg-red-500 text-white text-sm p-2 mt-2'>Clear image</button>

                : null }
                
            </label>
        

        <div className='space-y-2 col-span-8 flex flex-col'>

          <div className='flex flex-col'>
      
        <input value={itemInfo.itemName} onChange={handleInfoChange} placeholder='Enter item name' className=' p-3 focus:outline-none bg-gray-100' type="text" name="itemName" id="" />
        </div>

        <div className='flex flex-col'>
      
        <textarea placeholder='Add a description' className='bg-gray-100 focus:outline-none px-2' name="" id="" cols="30" rows="5"></textarea>        </div>
   
        <div className='flex flex-col'>
      
        <input value={itemInfo.price} onChange={handleInfoChange} placeholder='Enter price' className=' p-3 focus:outline-none bg-gray-100' type="number" name="price" id="" />
        </div>
        <div className='flex flex-col space-y-1'>

       <select  onChange={handleInfoChange}  className=' p-3 focus:outline-none bg-gray-100 capitalize text-blue-500 font-medium' name="category" id="">
        <option className='' value="">Select Category</option>
        {categories?.data.map(category=>{
          return <option className='font-medium' key={category._id} value={(category._id)}>{category.categoryName}</option>
        })}
        
       </select>


        </div>   
    
        <button disabled = {!isPending}  type='submit' className='bg-teal-600 text-white p-3 shadow flex justify-center items-center gap-2'> 
        {/* <span>{isPending ?"Adding item"  : "Add Item" } </span> */}
        {isPending ? <ClipLoader size={18}  aria-label="Loading Spinner" color='white'  data-testid="loader"/> : "Add Item" }
       
         </button>
   
        </div>  
        
        </div>
     
        
    </form>
    </div>
   
  )
}
