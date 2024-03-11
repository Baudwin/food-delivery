import './App.css'
import ShoppingCart from './components/ShoppingCart'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Shop from './pages/Shop'
import Home from './pages/home'
import Test from './pages/test'
import { ToastContainer } from 'react-toastify'

function App() {
  const router = createBrowserRouter (
   
    createRoutesFromElements (
      
      <Route path='/' element={<RootLayout/>}>
        <Route path='shopping-cart' element={<ShoppingCart/>}></Route>
        <Route path='shop' element={<Shop/>}></Route>
        <Route path='menu' element={<Home/>}></Route>
        {/* <Route path='test' element={<Test/>}></Route> */}
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
