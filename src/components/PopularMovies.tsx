import { useEffect, useState } from "react"
import { fetchpopular } from "../api/WhetherApiService"
import { Link } from "react-router-dom";

const Popularmovies = () => {

   const [popular,setpopular] = useState([]);
    useEffect(() =>
    {
        const popularmovie = async () => {
         const popu = await fetchpopular();
         setpopular(popu.results)
        }
        popularmovie();
    },[])
  // console.log(popular);
  
  const getImageUrl = (poster_path: string) => {
    return `https://image.tmdb.org/t/p/original/${poster_path}`;
  };
   
  return (
    <div className='w-full  bg-[#0f0f0f]  '>
        <div className='w-full text-white/70 flex justify-start items-center p-8 text-lg font-bold '>
            <div>    
            <h1 className="text-3xl">Popular Movies</h1>
            </div>
        </div>

      {/* mapping */}

       <div className='w-full h-full mt-4 flex gap-4 overflow-x-auto '>
        
        {popular?.map((item)=>(
          <Link to={`detail/${item.id}`} className='flex-none w-64 h-96 bg-gray-400/20 rounded-2xl overflow-hidden'>
        <img src={getImageUrl(item.poster_path)} alt=""className='w-full h-full rounded-xl' />

          </Link>
          ))}

     </div>
    </div>
  )
}

export default Popularmovies