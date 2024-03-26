import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useItemsData  = ()=>{
    return useQuery({
        queryKey:['items'],
        queryFn : ()=>{
            return axios.get('http://localhost:3005/get-items')
        },
    }
    )
}