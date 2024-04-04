import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {toast} from 'react-toastify'
import { useNavigate } from "react-router";

export const useItemsData  = ()=>{
    return useQuery({
        queryKey:['items'],
        queryFn : ()=>{
            return axios.get('https://food-delivery-app-backend-xi.vercel.app/get-items' ||'http://localhost:3005/get-items' )
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
         return axios.post('http://localhost:3005/add-item' || "https://food-delivery-app-backend-xi.vercel.app/", itemData)
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
        return axios.delete(`http://localhost:3005/delete-item/${id}`)
        },
        onSuccess:()=>{
            toast.warning("item deleted")
        },
        onError:(error)=>{
            console.log(error);
        }
    })
}