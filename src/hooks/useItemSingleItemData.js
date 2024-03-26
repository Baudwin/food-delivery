import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export const useSingleItemData = (itemID)=>{
    return useQuery({
        queryKey:['item', itemID],
        queryFn : ()=>{
            return axios.get(`http://localhost:3005/get-item/${itemID}`)
        }
    })
}