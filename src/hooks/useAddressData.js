import {useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export const addAddress = ()=>{
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const user = useAuthStore((state=>state.user))
    return useMutation({
        mutationFn:(addressDetails)=>{
            return axios.post('https://food-delivery-app-backend-xi.vercel.app/add-address', addressDetails, 
        {
        headers:{
            Authorization: `Bearer ${user.token}`
        }
        }
    )
        }, 

        onError : (error)=>{
            console.log(error);
            toast.warning(error.response.data,{
                pauseOnFocusLoss:false,
                hideProgressBar:true
            })
        }, 
        
        onSuccess:(data)=>{
            queryClient.invalidateQueries("address")
            toast.success(data.data.msg, {
                pauseOnFocusLoss:false,
                hideProgressBar:true
                
            })

            setTimeout(() => {
                navigate('/checkout')
            }, 4000);
        }
    },)
}


export const getAddress = ()=>{
    const user = useAuthStore((state=>state.user))
    return useQuery({
        queryKey:['addresses'],
        queryFn:()=>{
        return   axios.get('https://food-delivery-app-backend-xi.vercel.app/get-address', 
        {
            headers:{
                Authorization: `Bearer ${user.token}`
            }
            })
        }
    })
}