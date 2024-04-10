import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';

export const useItemsData  = ()=>{
    return useQuery({
        queryKey:['items'],
        queryFn : ()=>{
            return axios.get('https://food-delivery-app-backend-xi.vercel.app/get-items' )
        },
    }
    )
}

const onError = (error)=>{
    toast.error(error.response.data.msg);
}

export const useAddItem = ()=>{
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey : ['addItem'], 
        mutationFn : (itemData)=>{
         return axios.post('https://food-delivery-app-backend-xi.vercel.app/add-item', itemData)
        },
        onError,
         onSuccess : (data)=>{
            toast.success(data.data.msg)
            queryClient.invalidateQueries('items')
            navigate("/admin-dashboard/items")
        }
        // onMutate : ()=>{
        //     console.log("mutated");
        // }
    })
}

export const useDeleteItem = ()=>{
    return useMutation({
        mutationFn:(id)=>{
        return axios.delete(`https://food-delivery-app-backend-xi.vercel.app/delete-item/${id}`)
        },
        onSuccess:()=>{
            toast.warning("item deleted")
        },
        onError:(error)=>{
            console.log(error);
        }
    })
}