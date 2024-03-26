import React from 'react'

export const Orders = () => {
  return (
    <div className=' overflow-auto'>
        <div className=' flex justify-between items-center py-2 border-b-2 border-gray-400'>
        <h1 className='text-2xl font-bold'>All Orders</h1>
        </div>

        <table className='w-full'>
            <thead className=' bg-teal-600 '>
                <tr className='text-lg '>
                <th className=' py-2 text-white'>S/N </th>
                    <th className=' py-2 text-white'>User </th>
                    <th className=' text-white'>Phone No </th>
                    <th className=' text-white'>Total Amount </th>
                    <th className=' text-white'>Payment </th>
                    <th className=' text-white'>Date </th>
                    <th className=' text-white'>Status </th>
                    
                    <th className=' text-white'>Action </th>
                </tr>
            </thead>
            <tbody className=''>
                {[1,2,3,4,5].map(c=>{
                    return <tr className='space-y-2 text-center' key={c}>
                    <td>{c}</td>
                    <td className='py-2 text-lg'>Titah Baudwin</td>
                    <td>678680324</td>
                    <td>1000</td>
                    <td>COD</td>
                    <td>{Date.now()}</td>
                    <td className='text-green-600 font-medium'>Delivered</td>
                    <td>
                    <div>
                        <button className='px-2 py-1 bg-teal-600 hover:bg-teal-700 text-white rounded'>Manage</button>
                    </div>
                    </td>
                   
                </tr>
                })}
                
            </tbody>

        </table>
        

    </div>
  )
}
