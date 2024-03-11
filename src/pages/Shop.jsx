import { useAuthStore } from "../store/useAuthStore"

export default function Shop() {
  const user = useAuthStore(state=>state.user)
  return (
    <div>
          <div className='h-48 bg-gray-300 flex justify-center items-center bg-[]'>
            <h1 className='text-2xl font-medium text-center text-white'>Store</h1>
        </div>
    <div className='grid grid-cols-4 m-2 gap-4 p-16'>
      <div className='shadow-md col-span-3 border'>
        <span>Sort by : </span>
        <select className='shadow p-3 pr-2' name="" id="">
          <option value="">High to Low</option>
        </select>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:p-10 xl:p-10 sm:p-5 md:p-5 xsm:p-5 xxsm:p-5 '>

           {["1",'2','3','4','5','6','7'].map(n=>{
            return <div key={n} className='shadow-xl cursor-pointer border space-y-1 '>
            <img className='w-full h-56' src="images/ekwang.jpg" alt="img" />
            <p className='font-medium ml-2'>Ekwang</p>

            <div className='flex justify-between p-2'>
            <p className='text-gray-600'>2000 CAF</p>
            <button className='text-white bg-green-500 rounded-sm px-2 py-0.5'>Add to Cart</button>
            </div>
        </div>
        
           })} 
        </div>
   </div>

<div className='shadow-md border col-span-1'>

</div>

</div>



    </div>
  )
}
