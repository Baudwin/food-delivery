import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import axios from 'axios'
import { useAuthStore } from '../store/useAuthStore'

export const usePlaceOrder = ()=>{
    const queryClient = useQueryClient()
    const user = useAuthStore((state=>state.user))
    
    return useMutation({
        mutationFn:(orderDetails)=>{
            return axios.post('http://localhost:3005/place-order', orderDetails, 
        {
        headers:{
            Authorization: `Bearer ${user.token}`
        }
        })
        },
        onSuccess:()=>{
            queryClient.invalidateQueries('allOrders')
        }

    })
}


export const usegetOrders = ()=>{
    const user = useAuthStore((state=>state.user))
    
    return useQuery({
        queryKey:['orders', user._id],
        queryFn:()=>{
            return axios.get('https://food-delivery-app-backend-xi.vercel.app/my-orders', 
        {
        headers:{
            Authorization: `Bearer ${user.token}`
        }
        })
        },

    })
}


export const usegetAllOrders = ()=>{    
    return useQuery({
        queryKey:['allOrders'],
        queryFn:()=>{
            return axios.get('https://food-delivery-app-backend-xi.vercel.app/get-orders')
        },

    })
}