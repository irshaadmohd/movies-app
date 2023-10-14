import { useEffect, useState } from "react";
import { fetchNowDay } from "../api/WhetherApiService";
import { Link } from "react-router-dom";

const TrendingMovie = () => {
  const [today, settoday] = useState([]);
  useEffect(() => {
    const trendingtoday = async () => {
      const trend = await fetchNowDay();
      settoday(trend.results);
    };
    trendingtoday();
  }, []);
  // console.log(today);

  const getImageUrl = (poster_path: string) => {
    return `https://image.tmdb.org/t/p/original/${poster_path}`;
  };

  return (
    <div className="">
      <div className="w-full bg-[#0f0f0f] mt-[100px]">
        <div className="w-full h-8  flex justify-start items-center p-6 text-lg font-bold gap-9">
          <div>
            <h1 className="text-white/70 pt-20 text-3xl">Trending Shows</h1>
          </div>

          <div className=" ">
            <button>x</button>
            <button></button>
          </div>
        </div>

        {/* mapping */}

        <div className="w-full h-full pt-16 mt-4 py-4 flex gap-4 overflow-y-auto">
          {today?.map((item) => (
            <Link
              to={`detail/${item.id}`}
              className="flex-none w-64  h-96 bg-gray-400/20 rounded-2xl  "
            >
              <img
                src={getImageUrl(item.poster_path)}
                alt=""
                className="h-full w-full rounded-2xl"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};


export default TrendingMovie;
