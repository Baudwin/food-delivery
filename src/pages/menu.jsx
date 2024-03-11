import { useEffect, useState } from "react"
import items from "../items"
import { useCartStore } from "../store/useCartStore"

export default function Menu() {
    const addToCart = useCartStore(state=>state.addToCart)

  const [filter, setFilter] = useState([])

  useEffect(()=>{
   const filteredItems =  items.filter(item=>item.category === filter)
    setFilter([filteredItems])
  },[])
 
const AddToCart = (item) =>{
addToCart(item)
}

  return (
    <div className="">
  
<div className="p-10 bg-[url('images/img-2.jpg')]  bg-cover flex justify-center items-center">

<h1 className=" text-4xl font-bold text-white">Menu</h1>
</div>

<div className=" grid lg:grid-cols-12 gap-4 lg:container mx-auto py-10 lg:px-10 sm:px-5 xsm:px-5 xl:px:10">

{/* Div with all products  */}
<div className="products lg:col-span-9 xl:col-span-9 bg-grey-300 border py-10 px-5 shadow-md">


<div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 ">

{items.map(item=>{
  return <div key={item.id} className=" relative">
<img className=" shadow-sm h-44 w-full object-cover border" src={`images/${item.img}.jpg`} alt="img" />
<h1 className="font-semibold text-md">{item.name}</h1>
<div className="flex justify-between items-center">
<p className="text-gray-600 ">{item.price} CFA</p>
<button onClick={()=>AddToCart(item)} className=" shadow-xl px-2 py-1 text-white flex gap-1 bg-amber-600 rounded-full"> 
<span className="text-sm font-medium uppercase">
  Add
</span>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag w-3 h-5 hover:cursor-pointer font-bold" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
</button>
</div>
</div>
})}

</div>

</div>

{/* First grid ends here */}



{/* Second grid elow  */}

<div className="lg:col-span-3 space-y-4 xl:col-span-3 border md:row-start-1 sm:row-start-1 xsm:row-start-1 xxsm:row-start-1 shadow-md px-2 py-2">

  <div className="p-2">
  <div className="flex">
    <input className=" border leading-tigh bg-red-100 focus:outline-none w-full px-2 py-2" placeholder="Search item" type="text" name=""  id="" />
    <button className="bg-amber-600 text-white p-2">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white font-bold" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
    </button>
    </div> 
  </div>

<div className="p-2 space-y-3">
  <h1 className="font-bold text-2xl">Category</h1>
  <ul className="space-y-1">
    <li className="text-lg"><input type="checkbox" /> Food</li>
    <li className="text-lg"><input type="checkbox" /> Snacks</li>
    <li className="text-lg"><input type="checkbox" /> Drinks</li>
    <li className="text-lg"><input type="checkbox" /> Desert</li>
  </ul>

</div>


<div className="px-2 space-y-3">
  <h1 className="text-xl font-bold">Filter By Price </h1>
<input min={1000} max={9000} className="bg-gray-700 w-full accent-amber-500" type="range" name="range" id="" />
</div>

</div>


</div>




    </div>
  )
}
