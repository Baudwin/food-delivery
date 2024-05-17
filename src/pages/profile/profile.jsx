import Cookies from 'js-cookie'
import { NavLink, Outlet } from 'react-router-dom'
import { ProfileNavigation } from './profileNavigation'
import axios from "axios";
import { useAuthStore } from '../../store/useAuthStore';


export const Profile = () => {


  return (
    <>
 <div className="py-14 bg-[url('/images/img-2.jpg')]  bg-cover  flex justify-center items-center">
<h1 className=" text-4xl font-bold text-white">Profile</h1>
</div>


    <div className='container py-10 space-y-7'>
     <ProfileNavigation/>
    
        <main className=''>
      <Outlet/>
        </main>
    
    </div>

      
    </>
  )
}
