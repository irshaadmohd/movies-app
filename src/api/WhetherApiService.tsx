import axios from "axios";


// now
export const fetchNowPlaying = async ()=>{
  const APP_KEY ="a2613df0d5400f1c75c1f2cdf1306b9a"
try{
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APP_KEY}`);
  return data
}catch(error){
 console.log(error);
}
}

// trending day

export const fetchNowDay = async ()=>{
  const APP_KEY ="a2613df0d5400f1c75c1f2cdf1306b9a"
try{
  const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APP_KEY}`);
  return data
}catch(error){
 console.log(error);
}
}

//popular movies

export const fetchpopular = async ()=>{
  const APP_KEY ="a2613df0d5400f1c75c1f2cdf1306b9a"
  try {
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APP_KEY}`);
    return data
  }catch(error){
    console.log(error);
    
  }
}

// users

export const fetchusers = async ()=>{
  try {
    const {data} = await axios.get("https://dummyjson.com/users");
    return data
  }catch(error){
    console.log(error);
    
  }
}

// Movie details

export const fetchDetails = async(id:number)=>{
  const APP_KEY ="a2613df0d5400f1c75c1f2cdf1306b9a"
  try {
    const {data}=await axios.get(` https://api.themoviedb.org/3/movie/${id}?api_key=${APP_KEY}` )
    return data
  } catch (error) {
    console.log(error);
  }
}

export const fetchSearch = async(query:string)=>{
  const APP_KEY ="a2613df0d5400f1c75c1f2cdf1306b9a"
  try {
    const {data}=await axios.get(` https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${APP_KEY}` )
    return data
   
  } catch (error) {
    console.log(error);
  }
}

