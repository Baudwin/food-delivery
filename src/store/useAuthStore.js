import  { create} from 'zustand'

const user = localStorage.getItem('user')
export const useAuthStore = create((set)=>({
    user : user ?  JSON.parse(user) : null, 
    login : ()=>{
        set({user : {username:"Huncho", password:"1234"}})
        localStorage.setItem('user', JSON.stringify({username:"Huncho", password:"1234"}))
    },

    logout : ()=>{
        localStorage.removeItem('user')
        set({user:null})
    }
}))