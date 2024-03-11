import React from 'react'

export default function Home() {
  return (
    <div className=''>
        <div className=' bg-[url("images/img-3.jpg")] bg-cover bg-top h-68 p-2'>
            <div className='space-y-2 flex flex-col justify-center items-center text-white pt-10 '>
                <h1 className='text-6xl font-semibold'>Lorem Ipsum Dolor.</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='bg-amber-600 px-5 py-4 rounded-full text-white shadow-lg'>Order now</button>
            </div>

        </div>
{/* MENU  */}


<div className=' lg:p-10 md:p-10 bg-amber-100 py-4'>

<div className=' container mx-auto py-7 mt- rounded shadow-md px-4'>
    <div className='grid lg:grid-cols-4 md:grid-cols-4 gap-3'>
        <div className='border shadow-sm p-3 flex flex-col justify-center items-center space-y-2'>
            <img className='rounded-full w-28 h-28' src="images/img-1.jpg" alt="foods" />
            <h1 className='text-lg font-semibold'>Food</h1>
            <p  className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, nihil?</p>
            <button className=' px-2 py-1 border border-amber-600 rounded-md'>See menu</button>
        </div>
        <div className='border shadow-sm p-3 flex flex-col justify-center items-center space-y-2'>
            <img className='rounded-full w-32 h-32' src="images/img-2.jpg" alt="drinks" />
            <h1 className='text-lg font-semibold'>Drinks</h1>
            <p  className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, nihil?</p>
            <button className=' px-2 py-1 border border-amber-600 rounded-md'>See menu</button>
        </div>

        <div className='border shadow-sm p-3 flex flex-col justify-center items-center space-y-2'>
            <img className='rounded-full w-32 h-32' src="images/img-3.jpg" alt="snacks" />
            <h1 className='text-lg font-semibold'>Snacks</h1>
            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, nihil?</p>
            <button className=' px-2 py-1 border border-amber-600 rounded-md'>See menu</button>
        </div>

        <div className='border p-3 shadow-sm flex flex-col justify-center items-center space-y-2'>
            <img className='rounded-full w-32 h-32' src="images/img-4.jpg" alt="desert" />
            <h1 className='text-lg font-semibold'>Desert</h1>
            <p  className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, nihil?</p>
            <button className=' px-2 py-1 border border-amber-600 rounded-md'>See menu</button>
        </div>

    </div>
    
</div>
        
</div>    

    </div>
  )
}
