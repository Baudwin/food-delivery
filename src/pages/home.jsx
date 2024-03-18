import React from 'react'

export default function Home() {
  return (
    <div className=' bg-black text-white sm:px-7'>
      


{/* ABOUT  */}
<div className='flex sm:flex-col md:flex-col items-center gap-10 container py-10'>
   
<div className=' space-y-3 flex-1'>
<h1 className='italic font-serif text-amber-500'>about us</h1>
    <h1 className='text-4xl'> We Create the best
foody product
</h1>
    <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat. </p>
          <ul className='space-y-2'>
            <li><p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatibus.</p></li>
            <li><p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatibus.</p></li>
            <li><p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptatibus.</p></li>
          </ul>
          <button className='px-4 py-3 shadow-md text-sm bg-amber-500 text-white rounded-full'>Read More </button>
</div>


<div className='flex flex-col place-self-center flex-1 gap-2'>
<img className=' object-center flex-1 h-1/2' src="/images/img-1.jpg" alt="" />
<div className='flex gap-2 px-1'>
<img className=' object-center w-1/2' src="/images/img-5.jpg" alt="" />
<img className='  object-center  w-1/2 ' src="/images/img-6.jpg" alt="" />
</div>

</div>


</div>


{/* CATEGORIES  */}

<div className=' container space-y-5'>
    <h2 className='text-xl font-bold text-center'>Categories</h2>
    <div className='grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 gap-3 '>
    <img className='category-img' src="/images/img-1.jpg " alt="" />
    <img className='category-img' src="/images/img-2.jpg" alt="" />
    <img className='category-img' src="/images/img-3.jpg" alt="" />
    <img className='category-img' src="/images/img-4.jpg" alt="" />  
    </div>
    


</div>


{/* MENU  */}

{/* <div className=' lg:p-10 md:p-10 bg-amber-50 py-4 '>

<div className=' lg:container xl:container mx-auto py-7 rounded shadow-md lg:px-4 px-4 '>
    <div className='grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-3'>
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
        
</div>     */}

    </div>
  )
}
