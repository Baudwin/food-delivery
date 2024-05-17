import React from 'react'

export const Error404 = () => {


  return (
    <>
<div className="py-14 bg-[url('/images/img-2.jpg')]  bg-cover  flex justify-center items-center">
<h1 className=" text-4xl font-bold text-white">404 Error</h1>
</div>

    <div className='container  py-20'>
        <div className='flex flex-col justify-center items-center '>
         <h1 className='text-6xl font-bold text-amber-500 pb-3'>404</h1>
        <p className='font-bold text-xl py-3 text-center'>Oops! Looks like something went wrong</p>
        <p className='text-sm font-thin '>Page could not be found! we'll get it sorted out in no time. 
              </p>
              <p className='text-sm font-thin '> Meanwhile checkout these fresh ideas: 
              </p>
          
       
        <button className='px-5 py-2 mt-4 bg-amber-500 text-white rounded-md'>Go Home</button>
 
        </div>

    </div>

    </>
  )
}
