import {useMutation} from '@tanstack/react-query'
import axios from 'axios'


export const usePlaceOrder = ()=>{
    return useMutation({
        mutationFn:(orderDetails)=>{
            return axios.post('http://localhost:3005/place-order', orderDetails)
        }
    })
}