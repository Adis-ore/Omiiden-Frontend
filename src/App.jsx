import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import BookUs from './Components/BookUs'
import  Footer  from './Components/Footer'
import Contact from './Pages/Contact'
import ScrollToTop from './Components/ScrollToTop'
import About from './Pages/About'
import Team from './Components/Team'
import Gallery from './Components/Gallery'
import GalleryPreview from './Components/GalleryPreview'
import Events from './Components/Events'
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/book-us" element={<BookUs />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/gallarey' element={<GalleryPreview/>}/>
        <Route path='/events' element={<Events/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
