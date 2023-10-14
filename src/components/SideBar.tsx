// import {BiUserCircle} from "react-icons/bi"
// import {IoIosArrowDropdownCircle} from "react-icons/io"
// import {IoLogOut} from "react-icons/io5"
// import {AiFillCompass} from "react-icons/ai"
// import {GiRoyalLove} from "react-icons/gi"
import {BsBrowserSafari} from "react-icons/bs"
import {MdFavoriteBorder} from "react-icons/md"
import {SlCalender} from "react-icons/sl"
import {RiRadioButtonLine} from "react-icons/ri"
import { fetchusers } from "../api/WhetherApiService"
import { useEffect, useState } from "react"




const SideBar = () => {

  const [user,setuser] = useState([])

  useEffect(() => {
    const username = async () => {
        const user1 = await fetchusers();
        setuser(user1.users)
    }
    username();
},[])
// console.log(user);

  return (

    <div className='w-64 text-gray-600 pr-4 h-screen backdrop-filter backdrop-blur-xl py-16 '>
<div className='flex -mt-10 pl-12'>
   <h1 className='text-red-500 text-2xl font-bold'>Izz <span className='text-white'>Movies</span></h1>

</div>
<div className='flex justify-center py-7'><ul>
   <li className='text-white flex items-center py-3 gap-4 pt-6'> <BsBrowserSafari className="text-red-600 hover:rounded-full" size={23} /> <span>Browse</span></li>
    <li className='text-white flex items-center py-3 gap-4'>  <MdFavoriteBorder className="text-xl  hover:rounded-full"/>   <span>  Watchlist </span></li>
  <li className='text-white flex items-center py-3 gap-4'> <SlCalender className="text-xl "/>   <span>  Coming soon</span></li>
</ul>
</div>

<div className='flex items-center justify-center pt-7 '>
  <div className=' h-[460px] w-[200px] '>
    <h3 className='text-slate-300 pl-10 text-s'>Following</h3>
    <div className="flex gap-2 pl-2 pt-4">
    <RiRadioButtonLine size={24} className="flex text-green-500 text-lg pt-1"/>
      <img className="w-8 h-8 flex rounded-3xl object-cover" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" ></img>
      <p className="font-semibold text-white pt-1">Annan</p>
      
      </div>
  </div>

</div>




   </div>
  )
}

export default SideBar



