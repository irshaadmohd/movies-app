import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { fetchDetails } from "../api/WhetherApiService";
import { useParams } from "react-router-dom";

const MovieDetails = () => {

  const [detailData, setDetailData] = useState('');
  const { id } = useParams();
  useEffect(() => {
    const getDetails = async () => {
      const fetchingDetailData = await fetchDetails(id);
      setDetailData(fetchingDetailData);
    };
    getDetails();
  }, []);
  // console.log("dddd", detailData);
  const getImage = (backdrop_path: string) => {
    return `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  };

  return (

    <div className="w-full h-screen p-2 md:p-10 ">
      
      {/* <Header/> */}
     <div className="g-yellow-300 w-full h-[400px] py5 md:h-full justify-end flex mt-8 relative ">
     <img className=" h-full  " src={getImage(detailData.backdrop_path)} />
      <div className="absolute md:pt- md:justify-center w-full h-full top-0 p-6 flex flex-col left-0 bg-gradient-to-r md: from-black md:via-black/90">
        <div className="flex gap-3 md:gap-4 flex-col">
          <h1 className="text-yellow-500 md:text-4xl text-2xl font-extrabold">
            {detailData.title}
          </h1>
          <div className="flex  gap-4 items-center flex-row">
            <p className="text-white text-xl">
              {" "}
              Voting Average:
            </p>
          
          </div>
          <p className=" text-xl text-white">
            popularity : {detailData.popularity}
          </p>
          <div className="flex  g-yellow-300 items-center gap-5 flex-row">
            <h1 className="text-white text-xl">
              {" "}
            Release : {dayjs(detailData.release_date).format("DD MM YYYY ")}
            </h1>
          </div>
          <h1 className="text-white text-2xl pt-2">Overview:</h1>
          <p className="text-white/70 md:w-[700px] -pt-2 text-xl">{detailData.overview}</p>
          
        </div>
      </div>
    </div> 
    </div>
  );
};
export default MovieDetails;