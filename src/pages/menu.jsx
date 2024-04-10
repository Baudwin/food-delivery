import {useState } from "react"
import { useCartStore } from "../store/useCartStore"
import { useItemsData } from "../hooks/useItemsData"
import { PulseLoader } from "react-spinners";

export default function Menu() {
  const {isLoading, data:allItems, isFetching, isError, isSuccess, error} = useItemsData()
  const addToCart = useCartStore(state=>state.addToCart)
  const [currentCategory, setCurrentCategory] = useState("food")


const items =  allItems && allItems.data.filter(item=>item.category.categoryName===currentCategory)

  


const AddToCart = (item) =>{
addToCart(item)
}

  return (
   <div className="">
  
<div className="py-14 bg-[url('/images/img-2.jpg')]  bg-cover  flex justify-center items-center">
<h1 className=" text-4xl font-bold text-white">Our Menu</h1>
</div>



{/* Div with all products  */}
<div className="products pb-14 container sm:px-3 md:px-10 ">

<div className="pb-9 bg-white">

<div className=" category flex justify-center items-center pt-6 border-b">
  <button onClick={()=>{setCurrentCategory("food")}} className={` flex-1 flex flex-col justify-center items-center font-medium ${currentCategory==="food"?"active":null}`}> 
 <span>Food</span>
  </button>
  <button onClick={()=>{setCurrentCategory("drinks")}} className={` flex-1 flex flex-col justify-center items-center font-medium ${currentCategory==="drinks"?"active":null}`}> 
 <span>Drinks</span>
  </button>
  <button onClick={()=>{setCurrentCategory("snacks")}} className={` flex-1 flex flex-col justify-center items-center font-medium ${currentCategory==="snacks"?"active":null}`}> 
 <span>Snacks</span>
  </button>
  <button onClick={()=>{setCurrentCategory("desert")}} className={` flex-1 flex flex-col justify-center items-center font-medium ${currentCategory==="desert"?"active":null}`}> 
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
{items && items?.map(item=>{
 
  return <div key={item._id} className="shadow">
<img  className=" h-52 w-full object-cover " src={item?.img.url} alt="img" />
 <h1 className="font-semibold text-md capitalize text-center">{item.itemName}</h1>

<div className="flex justify-between items-center py-1 px-1 ">
 <p className="text-gray-700 text-sm">{item.price} XAF</p> 

<button onClick={()=>AddToCart(item)} className=" hover:bg-amber-600 shadow rounded-full px-3 py-1 text-white flex gap-1 justify-center bg-amber-500 "> 
<span className="text-sm font-medium uppercase">
  Add
</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag w-3 h-5 hover:cursor-pointer font-bold" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
</button>

</div>




</div>
}) }

</div>

}





</div>

{/* First grid ends here */}



    </div>
  )
}
