import React from 'react'

export default function Home() {
  return (
    <div className=' bg-black text-white sm:px-7'>



{/* ABOUT  */}
<div className='flex sm:flex-col md:flex-col items-center gap-10 container py-20'>
   
<div className=' flex-1 space-y-3'>
    
<h1 className='italic font-serif text-amber-500 text-xl'>about us</h1>
    <h1 className='text-3xl font-bold'> We Create the best
foody products
</h1>
    <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat. </p>
          <ul className='space-y-2'>

            <li className='flex items-center '>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                </svg>
                </span>
                <span className='text-sm'>Lorem ipsum dolor sit consectetur adipisicing elit. Veritatis, voluptatibus.</span>
                </li>

                <li className='flex items-center '>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                </svg>
                </span>
                <span className='text-sm'>Lorem ipsum dolor sit consectetur adipisicing elit. Veritatis, voluptatibus.</span>
                </li>

                <li className='flex items-center '>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check" viewBox="0 0 16 16">
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                </svg>
                </span>
                <span className='text-sm'>Lorem ipsum dolor sit consectetur adipisicing elit. Veritatis, voluptatibus.</span>
                </li>

          </ul>
          <button className='px-7 py-3 shadow-md text-sm bg-amber-500 text-white rounded-full'>Read More </button>
</div>



<div className='place-self-center flex-1'>
<div className='grid grid-cols-12 gap-3'>
<img className=' object-cover rounded col-span-12 w-full h-52' src="/images/img-1.jpg" alt="" />
<div className=' col-span-12 '>
    <div className='grid grid-cols-2 gap-3'>
<img className=' object-cover w-full rounded h-32' src="/images/img-6.jpg" alt="" />
<img className='  object-cover  w-full rounded h-32' src="/images/img-6.jpg" alt="" />
    </div>

</div>
    </div>


</div>


</div>


{/* CATEGORIES  */}


<div className='space-y-6 py-5 justify-center items-center container'>
    <h1 className='text-3xl font-bold text-center'> Our Categories</h1>
   <div className='flex  gap-3'>
    <img className=' flex-1 h-52 w-40 object-cover rounded '  src="/images/img-2.jpg" alt="" />
    <img className='flex-1 h-52 w-40 object-cover rounded '  src="/images/img-6.jpg" alt="" />
    <img className='flex-1 h-52 w-40 object-cover rounded '  src="/images/img-1.jpg" alt="" />
    <img className='flex-1 h-52 w-40 object-cover rounded ' src="/images/img-4.jpg" alt="" />

</div> 
</div>


{/* WHY CHOOSE US  */}

<div className='container flex sm:flex-col md:flex-col pt-20 gap-20'>

    <div className='grid grid-cols-12 flex-1 gap-2 sm:order-2'>

        <div className='grid grid-cols-12 col-span-12 gap-3 rounded'>
        <img  className=' col-span-6 rounded h-full object-cover' src="/images/img-6.jpg" alt="" />
        <img className=' rounded col-span-6' src="/images/img-4.jpg" alt="" /> 

        </div>

        <div className='grid grid-cols-3 col-span-12 gap-2 rounded'>
        <img  className='row-start-1  h-full object-cover rounded' src="/images/img-6.jpg" alt="" />
        
        <img className='rounded' src="/images/img-4.jpg" alt="" />
        <div className='grid gap-2'>
         <img className='rounded' src="/images/img-1.jpg" alt="" />
        <img className='rounded' src="/images/img-6.jpg" alt="" />   
        </div>
        </div>
        
    </div>




<div className='flex-1 sm:order-1 space-y-4 px-4 place-self-center'>
    <h1 className='text-amber-500 italic text-xl'>Why choose us </h1>
    <h1 className='text-2xl font-bold'>Exta ordinary taste
And Experienced </h1>
    <p className='text-sm'>Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Quisque diam pellentesque 
    bibendum non dui volutpat fringilla bibendum. 
    Urna, elit augue urna, vitae feugiat pretium donec id elementum.
     Ultrices mattis sed vitae mus risus.
     Lacus nisi, et ac dapibus sit eu velit in consequat.</p>

<div className='flex items-center'>
    <div>
        <div className='bg-amber-500 px-2 py-4 rounded'>

        </div>
        <h1>Fast Food</h1>
    </div>

    <div>
    <div className='bg-amber-500 px-2 py-4 rounded'>

</div>
        <h1>Lunch</h1>
    </div>


    <div>
    <div className='bg-amber-500 px-2 py-4 rounded'>

</div>
        Dinner
    </div>

</div>

<div>

</div>

</div>


</div>


{/* STAFF CHARACTERISTICS  */}

<div>

<div>
    
</div>


</div>



    </div>
  )
}
