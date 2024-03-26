import React from 'react'

export const Categories = () => {
  return (
    <div className='space-y-3'>
         <div className=' flex justify-between items-center py-2 border-b-2 border-gray-400'>
        <h1 className='text-3xl font-medium text-teal-700'>Categories</h1>
        <button className='bg-green-500 text-white p-2'>New Category</button>
        </div>

        <table className='w-2/3'>
            <thead className='text-left'>
                <tr className='text-lg '>
                    <th className='font-medium'>Category </th>
                    <th className='font-medium'>Action </th>
                </tr>
            </thead>
            <tbody className=''>
                {[1,2,3,4].map(c=>{
                    return <tr className='' key={c}>
                    <td>Food</td>
                    <td>
                    <div>
                        <button className='px-2 py-1 bg-red-500 text-white rounded'>delete</button>
                    </div>
                    </td>
                   
                </tr>
                })}
                
            </tbody>

        </table>

    </div>
  )
}
