import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const useSingleItemData = (itemID)=>{
    return useQuery({
        queryKey:['item', itemID],
        queryFn : ()=>{
            return axios.get(`https://food-delivery-app-backend-xi.vercel.app/get-item/${itemID}`)
        }
    })
}