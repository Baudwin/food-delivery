import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCategoryData = ()=>{
    return useQuery({
        queryKey:['categories'], 
        queryFn : ()=>{
            return axios.get(`https://food-delivery-app-backend-xi.vercel.app/get-categories`)
        }
    })
}