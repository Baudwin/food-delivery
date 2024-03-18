import { useEffect, useMemo, useState } from "react"
import items from "../items"
import { useCartStore } from "../store/useCartStore"

export default function Menu() {
  const addToCart = useCartStore(state=>state.addToCart)
  const [query, setQuery] = useState("")

  const filteredItems = useMemo(()=>{
    return  items.filter(item=>item.name.toLowerCase().includes(query.toLowerCase()))
  }, [items, query])

  const search = (e)=>{
    const {value} = e.target
    setQuery(value)
  }

  const filterCategory = (e)=>{
    const {value} = e.target
    // console.log(items.filter(item=>item.category.toLowerCase().includes(value.toLowerCase())));
    
  }

 
const AddToCart = (item) =>{
addToCart(item)
}

  return (
    <div className="">
  
<div className="py-14 bg-[url('/images/img-2.jpg')]  bg-cover  flex justify-center items-center">

<h1 className=" text-4xl font-bold text-white">Menu</h1>
</div>

{/* <div className="flex gap-4 justify-center items-center mt-5 text-white">
  <button className="bg-amber-600 p-3 rounded shadow-md">Foods</button>
  <button className="bg-amber-600 p-3 rounded shadow-md">Drinks</button>
  <button className="bg-amber-600 p-3 rounded shadow-md">Snacks</button>
  <button className="bg-amber-600 p-3 rounded shadow-md">Desert</button>
  
</div> */}

<div className=" grid lg:grid-cols-12 gap-2 lg:px-28 xl:px-28 py-7 sm:px-5 xsm:px-5">


{/* Div with all products  */}
<div className="products lg:col-span-10 xl:col-span-10 bg-grey-300 border py-10 px-5 shadow-md">

<div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 ">

{filteredItems.length != 0 ? filteredItems.map(item=>{
  return <div key={item.id} className="">
<img loading='lazy' decoding='async' fetchPriority='high' className=" shadow-sm h-44 w-full object-cover border" src={`/images/${item.img}.jpg`} alt="img" />
<h1 className="font-semibold text-md">{item.name}</h1>
<div className="flex justify-between items-center">
<p className="text-gray-600 ">{item.price} CFA</p>
<button onClick={()=>AddToCart(item)} className=" shadow-xl px-2 py-1 text-white flex gap-1 bg-teal-500 rounded-full"> 
<span className="text-sm font-medium uppercase">
  Add
</span>

        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag w-3 h-5 hover:cursor-pointer font-bold" viewBox="0 0 16 16">
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
</button>
</div>
</div>
}) : <h1 className="text-2xl text-red-500 font-semibold"> "{query}" not found!!</h1>}

</div>

</div>

{/* First grid ends here */}


{/* Second grid elow  */}

<div className="lg:col-span-2 space-y-4 xl:col-span-2 border md:row-start-1 sm:row-start-1 xsm:row-start-1 xxsm:row-start-1 shadow-md px-2 py-2">

  <div className="p-2">
  <div className="flex">
    <input className=" border leading-tigh bg-teal-50 focus:outline-none w-full px-2 py-2" placeholder="Search item" type="text" name="query" onChange={search} id="" />
    <button className="bg-teal-500 text-white p-2">
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search text-white font-bold" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
      </svg>
    </button>
    </div> 
  </div>

<div className="p-2 space-y-3">
  <h1 className="font-bold text-2xl">Category</h1>
  <ul className="space-y-1">
    <li className="text-lg"><input onChange={filterCategory} value={"food"} type="checkbox" /> Food</li>
    <li className="text-lg"><input onChange={filterCategory} value={"snack"} type="checkbox" /> Snacks</li>
    <li className="text-lg"><input onChange={filterCategory} value={"drinks"} type="checkbox" /> Drinks</li>
    <li className="text-lg"><input onChange={filterCategory} value={"desert"} type="checkbox" /> Desert</li>
  </ul>

</div>


<div className="px-2 space-y-3">
  <h1 className="text-xl font-bold">Filter By Price </h1>
<input min={1000} max={9000} className="bg-gray-700 w-full accent-teal-500" type="range" name="range" id="" />
</div>

</div>


</div>




    </div>
  )
}
