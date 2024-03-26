import React, { useState } from 'react'

export const AddItem = () => {
    const [image, setImage] = useState(null)
    const handleChange = (e)=>{
        const {files} = e.target
       setImage(files[0]);     
    }

  return (
    <div className=''>
    <h1 className='text-lg font-bold w-fit  p-2'>Add New Item</h1>
    <form className=''  action="">
        <div className='flex sm:flex-col md:flex-col gap-3'>

            <label  className='flex-1 cursor-pointer' htmlFor="img">
                {
                    image ? <img className='h-72 w-full object-cover' src={URL.createObjectURL(image)} alt="" />
                    : 
            <div className='bg-gray-50 flex justify-center items-center h-full'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-images text-gray-200 w-28 h-28" viewBox="0 0 16 16">
            <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
            <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"/>
            </svg>
            <input onChange={handleChange} hidden className='p-10' type="file" name="" id="img"/>
            </div>
                }
                
                {image ? 
                <button  onClick={(e)=>{
                    e.preventDefault()
                    setImage(null)
                    }} className='bg-red-500 text-white text-sm p-2 mt-2'>Clear image</button>

                : null }
                
                

            </label>
        
        <div className='space-y-2 flex-1 flex flex-col'>

          <div className='flex flex-col'>
      
        <input placeholder='Enter item name' className=' p-3 focus:outline-none bg-gray-100' type="text" name="" id="" />
        </div>

        <div className='flex flex-col'>
      
        <textarea placeholder='Add a description' className='bg-gray-100 focus:outline-none px-2' name="" id="" cols="30" rows="5"></textarea>        </div>
   
        <div className='flex flex-col'>
      
        <input placeholder='Enter price' className=' p-3 focus:outline-none bg-gray-100' type="number" name="" id="" />
        </div>
        <div className='flex flex-col space-y-1'>

       <select className=' p-3 focus:outline-none bg-gray-100' name="" id="">
        <option value="">Food</option>
        <option value="">Drinks</option>
        <option value="">Snacks</option>
        <option value="">Desert</option>
       </select>
        </div>   
    
        <button type='submit' className='bg-teal-600 text-white p-3 shadow'>Add Item</button>
        
        </div>  
        
        </div>
     
        
    </form>
    </div>
   
  )
}
