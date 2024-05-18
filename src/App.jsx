import './App.css'

import { useAuthStore } from './store/useAuthStore.js'
import { useCartStore } from './store/useCartStore.js'


import {Navigate, ScrollRestoration, Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import { ToastContainer, Bounce, Zoom, Slide } from 'react-toastify'


import RootLayout from './layout/RootLayout'
import { AdminDashboardLayout } from './layout/AdminDashboardLayout'



import { Items } from './components/admin/Items'
import { Categories } from './components/admin/Categories'
import { Orders } from './components/admin/Orders'
import { AddItem } from './components/admin/AddItem'
import { AllItems } from './components/admin/AllItems'
import { EditItem } from './components/admin/EditItem'

import ShoppingCart from './pages/ShoppingCart'
import { Checkout } from './pages/checkout/checkout.jsx'
import Menu from './pages/menu'
import Home from './pages/home'
import { Login } from './pages/login'
import { Signup } from './pages/signup'
import { Error404 } from './pages/error404'
import { Profile } from './pages/profile/profile.jsx'
import { useEffect } from 'react'
import { Payment } from './pages/checkout/payment.jsx'
import { AddAddress } from './pages/checkout/addAddress.jsx'
import { Address } from './pages/checkout/address.jsx'
import { UserAddress } from './pages/profile/userAddress.jsx'
import { UserOrders } from './pages/profile/userOrders.jsx'
import { UserDetails } from './pages/profile/userDetails.jsx'
import Cookies from 'js-cookie'
import axios from 'axios'



function App() {

const user = useAuthStore(state=>state.user)
const cart = useCartStore(state=>state.cart)
const setCartTotal = useCartStore(state=>state.setTotal)
const login = useAuthStore(state=>state.login)
  
const getUser = (token)=>{
  axios.get('https://food-delivery-app-backend-xi.vercel.app/user',{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
      .then(response => {
        login(response.data.userData, token)
      })
      .catch(error => {
          console.error('Error:', error); 
      });
}
  

useEffect(() => {
  if (!user) {
   const token =  Cookies.get('x-auth-cookie')
  getUser(token)
  Cookies.remove('x-auth-cookie') 
  
  }
  
}, []);    


useEffect(()=>{
setCartTotal()  
}, [cart])



  const router = createBrowserRouter (
   
    createRoutesFromElements (
      
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='shopping-cart' element={<ShoppingCart/>}></Route>
        <Route path='menu' element={  <Menu/>}></Route>
      
        <Route path='checkout' element={ <Checkout/> }>

        <Route index element={ <Address/>}></Route>
        <Route path='payment/:addressID' element={ <Payment/>}></Route>
        <Route path='add-address' element={ <AddAddress/>}></Route>

        </Route>
       
        

     <Route path='/admin-dashboard' element={<AdminDashboardLayout/>}>
     <Route index element={<Items/>}></Route>
     
     <Route path='items' element={<Items/>}>
      <Route index element={<AllItems/>}/>
      <Route path='add-item' element={<AddItem/>}/>
      <Route path='edit-item/:itemID' element={<EditItem/>}/>
     </Route>
    
     <Route path='categories' element={<Categories/>}/>
     <Route path='orders' element={<Orders/>}/>
      </Route>

      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>

      <Route path='profile' element={  <Profile/> }>
         <Route index element={<UserDetails/>}/>
          <Route path='details' element={<UserDetails/>}/>
          <Route path='address' element={<UserAddress/>}/>
          <Route path='orders' element={<UserOrders/>}/>
      </Route>


      <Route path='/*' element={<Error404/>}/>

      </Route>
 
    )
  )

  return (

    <>
    {/* <ScrollToTop/> */}
 <RouterProvider router={router}/>
     <ToastContainer
    transition={Zoom}
    autoClose={3000}
    />
    </>
  )
}

export default App
