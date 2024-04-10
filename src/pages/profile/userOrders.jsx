import React from 'react'
import { usegetOrders } from '../../hooks/useOrderData'
import { FaLocationDot, FaSquarePhone } from 'react-icons/fa6'
import { format } from 'date-fns';
import { FaRegCalendar } from 'react-icons/fa';

export const UserOrders = () => {
    const {data, isLoading, isError, error} = usegetOrders()

  return (
    <div className='space-y-5 sm:px-5 md:px-8'>
       <h1 className='font-bold text-2xl'> My Orders</h1>

        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
            {
                data?.data.map(order=>{
                    return <div key={order._id} className='shadow border p-4 space-y-6 '>
                        <div className='flex gap-2 items-center justify-between'>
                            <p> <span>Order ID : </span> <span className='text-blue-600 uppercase'>{(order._id).substring(18)}</span> </p>
                            <span className={`${order.status==="pending"? 'bg-gray-500' : null} ${order.status==="delivered"? 'bg-green-500' : null} ${order.status==="canceled"? 'bg-red-500' : null} rounded text-white px-4 py-1.5 font-bold`}>{order.status}</span>
                        </div>
                        

                        <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-3 '>
                      {order.items.map(item=>{
                            return <div className='' key={item._id}>
                                <div className='flex gap-1'>
                                    <img className='w-16 h-16 object-cover border' src={item.img.url} alt="" />
                                <div>
                                    <h1 className=' capitalize'>{item.itemName} ({item.quantity}) </h1>
                                    <p className='text-sm'>Price :  <span className='text-gray-500'>{item.price * item.quantity}</span> </p>
                                </div>
                                 
                                </div>
                                
                            </div>
                        })}

                        </div>
                        <hr />
{/* Address and stuff  */}
                        <div className='flex sm:flex-col justify-between gap-4 sm:gap-3'>
                        <div className='space-y-2 flex-1'>
                            <div className='flex gap-1'>
                                  <FaLocationDot className=' mt-1'/>
                            <span className='capitalize text-sm'>{order.address.building}, {order.address.street}, {order.address.city}, {order.address.state}</span>
                            </div>
                          
                            <p className='flex items-center gap-1'> 
                            <FaRegCalendar className='inline'/>
                           <span className='text-sm'>{format(new Date(order.createdOn), 'MMMM d, yyyy')}, {format(new Date(order.createdOn), 'hh:mm a')}</span> 
                            
                            </p>
                            <p className='flex items-center gap-1'>
                             <FaSquarePhone/> 
                            <span className='text-sm'> {order.userId.phoneNumber}</span>
                            </p>
                        
                        </div>

                        <div className='flex-1'>
                           <p className='text-sm'> Sub Total : <span className='text-gray-600'>{order.totalAmount} XAF</span>  </p> 
                           <p className='text-sm'> Payment Type : <span className='text-blue-500'>{order.paymentType}</span>  </p> 
                        </div>

                        </div>
                 
                    
                    </div>
                })
                
            }

        </div>









    </div>
  )
}
