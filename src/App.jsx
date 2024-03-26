import './App.css'
import ShoppingCart from './pages/ShoppingCart'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Menu from './pages/menu'
import Home from './pages/home'
import { ToastContainer } from 'react-toastify'
import { Checkout } from './pages/checkout'
import { AdminDashboardLayout } from './layout/AdminDashboardLayout'
import { Items } from './components/admin/Items'
import { Categories } from './components/admin/Categories'
import { Orders } from './components/admin/Orders'
import { AddItem } from './components/admin/AddItem'
import { AllItems } from './components/admin/AllItems'
import { EditItem } from './components/admin/EditItem'
import { Login } from './pages/login'
import { Signup } from './pages/signup'

function App() {

  const router = createBrowserRouter (
   
    createRoutesFromElements (
      
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='shopping-cart' element={<ShoppingCart/>}></Route>
        <Route path='menu' element={<Menu/>}></Route>
        <Route path='checkout' element={<Checkout/>}></Route>

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
      </Route>
 
    )
  )

  return (

    <>
    <ToastContainer/>
 <RouterProvider router={router}/>
 
    </>
  )
}

export default App
