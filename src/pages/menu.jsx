import { useEffect, useMemo, useState } from "react"
import { useCartStore } from "../store/useCartStore"
import { useItemsData } from "../hooks/useItemsData"
import { FaWineGlassEmpty } from "react-icons/fa6";
import { FaBurger } from "react-icons/fa6";
// import { FaPizzaSlice } from "react-icons/fa6";
import { FaCakeCandles } from "react-icons/fa6";
import { FaFishFins } from "react-icons/fa6";
import { PulseLoader } from "react-spinners";

export default function Menu() {
  const {isLoading, data:allItems, isFetching, isError, error} = useItemsData()
  const addToCart = useCartStore(state=>state.addToCart)
  const [currentCategory, setCurrentCategory] = useState("food")

  const items = allItems ? allItems?.data.filter(item=>item.category.categoryName===currentCategory) : null


const AddToCart = (item) =>{
addToCart(item)
}

  return (
   <div className="bg-amber-50">
  
<div className="py-14 bg-[url('/images/img-2.jpg')]  bg-cover  flex justify-center items-center">
<h1 className=" text-4xl font-bold text-white">Our Menu</h1>
</div>



{/* Div with all products  */}
<div className="products pb-14 container sm:px-3 md:px-10 ">

<div className="pb-9 sticky top-0 bg-amber-50">

<div className=" category flex justify-center items-center pt-6 border-b">
  <button onClick={()=>{setCurrentCategory("food")}} className={` flex-1 flex flex-col justify-center items-center font-medium ${currentCategory==="food"?"active":null}`}> 
 {/* <span><FaFishFins className=""/></span>  */}
 <span>Food</span>
  </button>
  <button onClick={()=>{setCurrentCategory("drinks")}} className={` flex-1 flex flex-col justify-center items-center font-medium ${currentCategory==="drinks"?"active":null}`}> 
  {/* <span><FaWineGlassEmpty className="text-amber-300"/></span>  */}
 <span>Drinks</span>
  </button>
  <button onClick={()=>{setCurrentCategory("snacks")}} className={` flex-1 flex flex-col justify-center items-center font-medium ${currentCategory==="snacks"?"active":null}`}> 
  {/* <span><FaBurger className="text-amber-700"/></span>  */}
 <span>Snacks</span>
  </button>
  <button onClick={()=>{setCurrentCategory("desert")}} className={` flex-1 flex flex-col justify-center items-center font-medium ${currentCategory==="desert"?"active":null}`}> 
  {/* <span><FaCakeCandles className="text-red-300"/> </span>  */}
 <span>Desert</span>
  </button>
 
</div>

</div>


{
isLoading ? <div className="container py-10 flex justify-center items-center gap-2">
{/* <h1 className="text-blue-500 text-2xl font-medium">Loading items</h1> */}
<PulseLoader color="gray" size={24}/>
</div>

: 


<div className="grid lg:grid-cols-4 xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3 lg:p-4 xl:p-4 sm:py-3">
{items?.length>0? items?.map(item=>{
 
  return <div key={item._id} className="shadow">
<img  className=" h-48 w-full object-cover " src={item?.img.url} alt="img" />
<div className="flex flex-col justify-between items-center py-1 ">
 <h1 className="font-bold text-md capitalize">{item.itemName}</h1>
 <p className="text-gray-700 text-sm">{item.price} XAF</p> 
</div>


<button onClick={()=>AddToCart(item)} className=" hover:bg-amber-600 shadow w-full px-2 py-2 text-white flex gap-1 justify-center bg-amber-500 "> 
<span className="text-sm font-medium uppercase">
  Add to cart
</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag w-3 h-5 hover:cursor-pointer font-bold" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
</button>

</div>
}) : null}

</div>

}





</div>

{/* First grid ends here */}



    </div>
  )
}
