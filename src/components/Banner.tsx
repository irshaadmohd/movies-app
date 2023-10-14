import { useEffect, useState } from "react"
import { fetchNowPlaying } from "../api/WhetherApiService"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { playObject } from "../models/city.model";

const Banner = () => {

 
   const [now,setnow]=useState<playObject[]>([])

   useEffect(()=>{
    const nowplay = async ()=>{
      const fetchnow = await fetchNowPlaying();
      setnow(fetchnow.results)
    }
    nowplay()
   },[])
  //  console.log(now);

   const getImageUrl = (poster_path: string) => {
    return `https://image.tmdb.org/t/p/original/${poster_path}`;
  };

  const options = {
    margin: 30,
    // responsiveClass: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 3000,
    responsive: {
      0: {
        items: 1,
      },
    },
  }; 



  return (
    
      <OwlCarousel {...options} className="owl-theme h-[700px] w-[1600px] p-6 mt-[70px] ml-10 " >
        {now?.map((bb)=>(
          <div className=" ml-7 flex w-full h-[750px] -mt-6 ">      
         

            <img src={getImageUrl(bb.poster_path)} alt={bb.title} className=" relative w-full rounded-3xl  h-full object-cover  "/>
            <div className="w-full h-full bg-gradient-to-r bg-black/20 from-black to-transparent absolute -top-[.1px]"> </div>
            
          

          </div>
        
        ))}
      </OwlCarousel>
     
    
  )
}

export default Banner
