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
import { Checkout } from './pages/checkout'
import Menu from './pages/menu'
import Home from './pages/home'
import { Login } from './pages/login'
import { Signup } from './pages/signup'
import { Error404 } from './pages/error404'
import { Profile } from './pages/profile'
import { useEffect, useState } from 'react'
import { ScrollToTop } from './components/ScrollToTop.jsx'



function App() {
 
const user = useAuthStore(state=>state.user)
const [auth, setUth] = useState(true)

const cart = useCartStore(state=>state.cart)
const setCartTotal = useCartStore(state=>state.setTotal)

useEffect(()=>{
setCartTotal()  
}, [cart])






// const navigateOut = ()=>{
//   setTimeout(() => {
    
//   }, 3000);
// }

  const router = createBrowserRouter (
   
    createRoutesFromElements (
      
      <Route path='/' element={<RootLayout/>}>
        {/* <ScrollToTop/> */}
        <Route index element={<Home/>}/>
        <Route path='shopping-cart' element={<ShoppingCart/>}></Route>
        <Route path='menu' element={  <Menu/>}></Route>
        <Route path='checkout' element={auth ?  <Checkout/> : <Navigate to={"/login"}/>}></Route>

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
      <Route path='profile' element={<Profile/>}/>


      <Route path='/*' element={<Error404/>}/>

      </Route>
 
    )
  )

  return (

    <>
    <ToastContainer
    transition={Zoom}
    autoClose={3000}
    />
 <RouterProvider router={router}/>
 
    </>
  )
}

export default App
