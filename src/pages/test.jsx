import React from 'react'

export default function Test() {
  return (
    <div className='container mx-auto py-14 lg:px-20'>

        <div className='grid lg:grid-cols-12 grid-rows-10 sm:grid-cols-1 text-center gap-2'>
            <div className='bg-blue-400 p-7  col-span-12'>1</div>
            <div className='bg-green-400 p-7 col-span-4 row-span-12'>2</div>
            <div className='bg-blue-400 p-7 col-span-8'>3</div>
            <div className='bg-green-400 p-7 col-start-5 col-span-8'>4</div>
            <div className='bg-blue-400 p-7 '>5</div>
            <div className='bg-green-400 p-7'>6</div>

        </div>

    </div>
  )
}
