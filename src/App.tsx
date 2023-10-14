import './App.css'
import SideBar from './components/SideBar'
// import NavBar from './components/NavBar'
// import Banner from './components/Banner'
import Home from './components/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';


function App() {

  return (
    <>
    <div className='bg-[#0f0f0f] flex flex-row'>
      <SideBar />
      <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<MovieDetails/>} path='/detail/:id'/>
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}
export default App
