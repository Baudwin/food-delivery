import React from 'react'
import { usegetAllOrders } from '../../hooks/useOrderData'

export const Orders = () => {
    const {data:orders, isLoading, isError, error}  = usegetAllOrders()
   
  return ( 
    <div className=' overflow-auto'>
        <div className=' flex justify-between items-center py-2 border-b-2 border-gray-400'>
        <h1 className='text-2xl font-bold'>All Orders</h1>
        </div>

        <table className='w-full'>
            <thead className=' bg-teal-600 '>
                <tr className='text-lg '>
                <th className=' py-2 text-white'>ID</th>
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
                {orders?.data.map(order=>{
                    return <tr className='space-y-2 text-center' key={order._id}>
                    <td>{(order._id).substring(18)}</td>
                    <td className='py-2 text-lg'>{order.userId.username}</td>
                    <td>{order.userId.phoneNumber}</td>
                    <td>{order.totalAmount}</td>
                    <td>{order.paymentType}</td>
                    <td>{Date.now()}</td>
                    <td className='text-green-600 font-medium'>{order.status}</td>
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
