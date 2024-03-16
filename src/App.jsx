import './App.css'
import ShoppingCart from './components/ShoppingCart'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import Menu from './pages/menu'
import Home from './pages/home'
import { ToastContainer } from 'react-toastify'

function App() {

  const router = createBrowserRouter (
   
    createRoutesFromElements (
      
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='shopping-cart' element={<ShoppingCart/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
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
