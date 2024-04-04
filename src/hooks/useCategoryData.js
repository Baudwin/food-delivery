import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCategoryData = ()=>{
    return useQuery({
        queryKey:['categories'], 
        queryFn : ()=>{
            return axios.get(`http://localhost:3005/get-categories`)
        }
    })
}