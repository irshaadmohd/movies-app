// import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import TrendingMovie from './TrendingMovie'
import Popularmovies from './PopularMovies'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='w-full h-screen overflow-y-scroll bg-[#0f0f0f] '>
        <NavBar/>
        <Banner/>
        <TrendingMovie/>
        <Popularmovies />
        <Footer/>
      
    </div>
  )
}

export default Home
