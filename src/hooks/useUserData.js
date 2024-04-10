import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router";

export const useUserData = ()=>{
    const login  = useAuthStore(state=>state.login)
    const navigate = useNavigate()

    return useMutation ({
        mutationFn : (userInfo)=>{
            return axios.post("https://food-delivery-app-backend-xi.vercel.app/signup", userInfo)
        },
        onError : (error)=>{
            toast.warning(error.response.data,{
                pauseOnFocusLoss:false,
                hideProgressBar:true
            })
        }, 
        onSuccess:(data)=>{
            login(data.data.userInfo)
            toast.success(data.data.msg)
            navigate("/")
        }
    })
}


export const useLoginUser = ()=>{
    const navigate = useNavigate()
    const login  = useAuthStore(state=>state.login)
    return useMutation({
        mutationFn : (userInfo)=>{
            return axios.post("https://food-delivery-app-backend-xi.vercel.app/user-login", userInfo)
        },
        onError : (error)=>{
            toast.warning(error.response.data,{
                pauseOnFocusLoss:false,
                hideProgressBar:true
            })
        }, 
        onSuccess:(data)=>{
            login(data.data.userInfo)
            toast.success(data.data.msg, {
                pauseOnFocusLoss:false,
                hideProgressBar:true
                
            })
            navigate("/")
        }
    })
}