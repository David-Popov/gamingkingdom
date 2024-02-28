import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import Recommended from './containers/Recommended'
import CarouselContainer from './containers/CarouselContainer'

function App() {

  return (
    <>
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <Navbar />
      <HeroCarousel />
      <Recommended />
      <CarouselContainer heading={'Top games'} tooltip={'Recommendations based on most purchased products by our users.'} />
    </>
  )
}

export default App
