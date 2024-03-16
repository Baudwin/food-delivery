import { create } from "zustand";
import {toast} from 'react-toastify'

const cartData  = localStorage.getItem('cart')

export const useCartStore = create((set, get)=>({
    cart : cartData ? JSON.parse(cartData) : [],
    subTotal : 0,

    addToCart : (item)=>{
        const userCart = get().cart
       const itemIndex =  userCart.findIndex(cartItem=>cartItem.id === item.id)
       if (itemIndex >=0) {
        userCart[itemIndex].quantity +=1
        localStorage.setItem('cart', JSON.stringify(get().cart))
        toast.info(` ${item.name } Quantity increased in cart`)
       } else {
        const updatedCart  = [...get().cart, {...item, quantity: 1}]
          set({cart : updatedCart})
          localStorage.setItem('cart', JSON.stringify(updatedCart))
          toast.success(` ${item.name } added to cart `)
       }
               
    }, 

    removeFromCart : (cartItem)=>{
     const userCart = get().cart 
     const updatedCart = userCart.filter(item=>item.id != cartItem.id)
     set({cart : updatedCart})
     localStorage.setItem('cart', JSON.stringify(updatedCart))
     toast.error(` ${cartItem.name} removed from cart `)
    }, 

    increaseItemQuantity : (cartItem)=>{
    const userCart = get().cart 
    const itemIndex = userCart.findIndex(item=>item.id === cartItem.id)
    if (userCart[itemIndex].quantity >= 1) {
        userCart[itemIndex].quantity += 1
    localStorage.setItem('cart', JSON.stringify(get().cart))
    // toast.info(`Quantity increased in cart`)
    } 

    }, 

    decreaseItemQuantity : (cartItem)=>{
        const userCart = get().cart 
        const itemIndex = userCart.findIndex(item=>item.id === cartItem.id) 
        if (userCart[itemIndex].quantity > 1) {
            userCart[itemIndex].quantity -= 1
        }
         else if(userCart[itemIndex].quantity === 1){
            const updatedCart = userCart.filter(item=>item.id != cartItem.id)
            set({cart : updatedCart})
            localStorage.setItem('cart', JSON.stringify(updatedCart))
            toast.error(` ${cartItem.name} removed from cart `)
        }
        localStorage.setItem('cart', JSON.stringify(get().cart ))
        },

        setTotal : ()=>{
          let {total} = get().cart.reduce((cartSubTotal, cartItem)=>{
            
            const {price,quantity}= cartItem
            const itemTotal = price * quantity
            cartSubTotal.total += itemTotal
            return cartSubTotal
           }, 
           {
            total:0
           })
           set({subTotal:total})
        },

        clearCart:()=>{
            localStorage.removeItem("cart")
            set({cart:[]})
        }, 
    
}))