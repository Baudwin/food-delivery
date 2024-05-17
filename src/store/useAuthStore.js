import  { create} from 'zustand'
import Cookies from 'js-cookie'

const user = JSON.parse(localStorage.getItem('user')) 
const token = JSON.parse(localStorage.getItem('token')) 

export const useAuthStore = create((set)=>({
    user : user ?  user : null, 
    token: token ?  token : null,  
    login : (userInfo, token)=>{
        set({user : userInfo})
        set({token : token})
         localStorage.setItem('user', JSON.stringify(userInfo))
         localStorage.setItem('token', JSON.stringify(token))
    },

    logout : ()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        set({user:null})
        set({token:null})
        Cookies.remove("x-auth-cookie")
    }
}))