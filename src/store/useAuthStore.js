import  { create} from 'zustand'

const user = JSON.parse(localStorage.getItem('user')) 

export const useAuthStore = create((set)=>({
    user : user ?  user : null, 
    login : (userInfo)=>{
        set({user : userInfo})
         localStorage.setItem('user', JSON.stringify(userInfo))
    },

    logout : ()=>{
        localStorage.removeItem('user')
        set({user:null})
    }
}))