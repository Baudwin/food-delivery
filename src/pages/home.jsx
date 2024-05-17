import { Link, useNavigate, NavLink } from 'react-router-dom'
import { ScrollToTop } from '../components/ScrollToTop'

export default function Home() {

const navigate = useNavigate()

    
  return (
    <>
    {/* <ScrollToTop/> */}
<div className=' bg-black text-white sm:px-7 md:px-10 space-y-14 py-10'>

<div className='container flex sm:flex-col md:flex-col items-center gap-5'>
    <div className='flex-1 space-y-7'>
         <h1 className='text-5xl font-bold'>Lorem ipsum dolor sit amet consectetur</h1> 
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem neque repellat 
        minima repellendus, omnis magni provident doloremque tempore placeat ad?</p>
         <button onClick={()=>navigate('/menu')} className='px-7 bg-amber-500 text-white shadow rounded-full font-semibold'>Order Now</button>
    </div>
  
    <div className='flex-1'>
        <img className=' object-cover' src="/images/plate-food.png" alt="" />
    </div>


</div>


{/* CATEGORIES  */}

<div className='container flex sm:flex-wrap  gap-4 text-center bg-black shadow-md border-amber-50 border p-10'>
    <div className='flex flex-col justify-center items-center gap-2'>
        <img src="" alt="foods" />
        <h1 className='text-xl font-semibold'>Foods</h1>
        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, quae?</p>
        <Link className='px-4 py-1 border border-amber-500 rounded bg-amber-500 hover:bg-amber-500 hover:text-white shadow'>Visit Menu</Link>
    </div>

    <div className='flex flex-col justify-center items-center gap-2'>
        <img src="" alt="drinks" />
        <h1 className='text-xl font-semibold'>Drinks</h1>
        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, quae?</p>
        <Link className='px-4 py-1 border border-amber-500 rounded bg-amber-500 hover:bg-amber-500 hover:text-white shadow'>Visit Menu</Link>
    </div>

    <div className='flex flex-col justify-center items-center gap-2'>
        <img src="" alt="snacks" />
        <h1 className='text-xl font-semibold'>Snacks</h1>
        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, quae?</p>
        <Link className='px-4 py-1 border border-amber-500 rounded bg-amber-500 hover:bg-amber-500 hover:text-white shadow'>Visit Menu</Link>
    </div>

    <div className='flex flex-col justify-center items-center gap-2'>
        <img src="" alt="desert" />
        <h1 className='text-xl font-semibold'>Desert</h1>
        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, quae?</p>
        <Link className='px-4 py-1 border border-amber-500 rounded bg-amber-500 hover:bg-amber-500 hover:text-white shadow'>Visit Menu</Link>
    </div>


</div>


{/* WHY CHOOSE US  */}

<section id='about'>
<div className='flex sm:flex-col container justify-center items-center gap-14'>
    <div className='flex-1'>
    <img className='' src="/images/plate2.png" alt="" />
    </div>

    <div className='flex-1 space-y-8'>
        <h1 className='font-bold text-3xl'>Why People Choose Us!</h1>

        <div className='space-y-5'>
            <div>
                <div>
                <h1 className='font-semibold'>Choose Your Favorite</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nam?</p>
                </div>
            </div>
            <div>
                <div>
                <h1 className='font-semibold'>We Deliver Your Meals</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nam?</p>
                </div>
            </div>

            <div>
                <div>
                <h1 className='font-semibold'>Grab Your Delicious</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, nam?</p>
                </div>
            </div>

        </div>

    </div>


</div>

</section>



{/* CUSTOMER FEEDBACK */}

<div className='container flex sm:flex-col items-center'>
    <div className='flex-1 space-y-6'>
        <h1 className='text-3xl font-bold'>Customer Feedback</h1>
        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A porro unde fuga voluptatum nobis maiores saepe, dolore corporis dicta, hic repellendus cumque, dolorem odio. Totam et quia ipsum consectetur nam?</p>
        <div>

        </div>
    </div>

<div className='flex-1'>
<img className=' object-cover' src="/images/plate-food.png" alt="" />
</div>

</div>





    </div> 
    </>
  )
}
