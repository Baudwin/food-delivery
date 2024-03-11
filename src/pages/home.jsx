import { useEffect, useState } from "react"
import items from "../items"
import { useCartStore } from "../store/useCartStore"

export default function Home() {
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

 4

</div>





{/* 

<div className="card">
  <div className="card-img"></div>
  <div className="card-info">
    <p className="text-title">Product title </p>
    <p className="text-body">Product description and details</p>
  </div>
  <div className="card-footer">
  <span className="text-title">$499.49</span>
  <div className="card-button">
    <svg className="svg-icon" viewBox="0 0 20 20">
      <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    </svg>
  </div>
</div></div> */}


{/* <div className="grid grid-cols-4">
<div class="w-60 h-80 bg-gray-50 p-3 flex flex-col gap-1 rounded-2xl">
  <div class="h-48 bg-gray-700 rounded-xl"></div>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <span class="text-xl font-bold">Long Chair</span>
        <p class="text-xs text-gray-700">ID: 23432252</p>
      </div>
      <span class="font-bold  text-red-600">$25.99</span>
    </div>
    <button class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2 rounded-md">Add to cart</button>
  </div>
</div>

</div> */}



        {/* <h1 className="text-3xl text-center">Homepage</h1>

<div className="p-10 flex gap-2">

<div className="shadow-lg flex-1 border h-60 w-60 p-2">
    <div className="grid grid-cols-4 gap-2">
        <div className="border shadow-md h-40">

        </div>
        <div className="border shadow-md h-40">

        </div>

        <div className="border shadow-md h-40">

            </div>
    
    
            <div className="border shadow-md h-40">

            </div>
    </div>
</div>

<div className="shadow-lg border h-60 w-60 py-2 px-1">
<input className="border shadow-lg" type="text" name="" id="" />
<button className="bg-amber-400 rounded-sm text-white">Search</button>
</div>

</div> */}

    </div>
  )
}
