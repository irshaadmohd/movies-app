import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
// import { FiSearch } from "react-icons/fi"
import { BiMessageAltDetail, BiSolidBellRing } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"
import { useEffect, useState } from "react"
import { fetchSearch } from "../api/WhetherApiService"
import { Link } from "react-router-dom";
import { searchObject } from "../models/city.model"
import { MdKeyboardArrowDown } from "react-icons/md";
import { DebounceInput } from "react-debounce-input";


const NavBar = () => {
  const [toggle, settoggle] = useState(true);
  const [query, setquery] = useState("");
  const [search, setsearch] = useState<searchObject[]>([])

  useEffect(() => {
    const searchCall = async () => {
      const result = await fetchSearch(query)
      // console.log(result.map((e)=>e.title));

      setsearch(result.results)
    }
    searchCall()
  }, [query])

  console.log(search, "api");
  console.log(query);

  const getImage = (backdrop_path: string) => {
    return `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  }


  return (

    <div className=' z-20 fixed p-6 text-white w-full h-20 backdrop-filter backdrop-blur-xl'>
      {/* search nav */}
      <div className='flex justify-between z-20'>
        <div className='flex gap-6'>
          <MdNavigateBefore size={28} className='text-white ' />
          <MdNavigateNext size={28} className='text-white' />


          {/* inputbar */}

          <div className="relative">

            <div
              className=" flex items-center justify-center w-full rounded-xl overflow-hidden relative"
              onFocus={() => settoggle(true)}
              onBlur={() => settoggle(false)}>
              <DebounceInput
                type="text"
                debounceTimeout={1000}
                placeholder="Search for Movies"
                className="rounded-xl w-[700px] text-white  p-2 placeholder:text-sm placeholder:tracking-wide bg-black/70"
                onChange={(e) => setquery(e.target.value)} />
              <MdKeyboardArrowDown
                size={25}
                className="absolute right-1 top-2 border-l-2 fill-gray-400" />
            </div>
            {toggle && search.length > 0 && (
              <div className=" w-full h-[500px]  bg-black/30 rounded-md text-white flex flex-col gap-1 overflow-y-scroll backdrop-blur  ">
                {search.map((e) => (
                  <div className="flex gap-3 w-full h-full">
                    <img src={getImage(e.poster_path)} alt="" className="w-10 h-10 flex items-center" />
                    <p className=" h-[60px] cursor-pointer hover:text-blue-500 hover:bg-white/5 w-full text-[18px] flex items-center">{e.title}</p>
                  </div>
                ))}
              </div>
            )}

            {/* contactlogin */}
            <div className='flex py-2 gap-9 absolute top-1 left-[1400px]'>

              <BiMessageAltDetail size={20} />
              <BiSolidBellRing size={20} />
              <BsFillPersonFill size={20} />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
