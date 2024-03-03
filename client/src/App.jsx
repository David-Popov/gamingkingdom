import { useState } from 'react'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import HeroCarousel from './components/HeroCarousel'
import Recommended from './containers/Recommended'
import CarouselContainer from './containers/CarouselContainer'
import { games } from './utils/gameObj'
import { WishlistProvider } from './contexts/WishlistContext'
import FooterInApp from './components/FooterInApp'
import Categories from './components/Categories'
import Wishlist from './components/Wishlist'
import LandingPage from './pages/LandingPage'

function App() {

  return (
    <>
      <WishlistProvider>
        <Navbar />
        <LandingPage />
        {/* <HeroCarousel />
        <Recommended />
        <CarouselContainer bg='tertiatry' games={games} heading={'Top games'} tooltip={'Recommendations based on most purchased products by our users.'} btn_link={''} />
        <CarouselContainer bg='secondary' games={games} heading={'Best Selling eGift Cards'} tooltip={'Recommendations based on most purchased products by our users.'} btn_link={''} />
        <CarouselContainer bg='tertiatry' games={games} heading={'Best Selling Gift Cards'} tooltip={'Recommendations based on most purchased products by our users.'} btn_link={''} />
        <CarouselContainer bg='secondary' games={games} heading={'Upcoming games'} tooltip={'Products available for pre-ordering selected by relevance.'} btn_link={''} />
        <Categories /> */}
        {/* <Wishlist /> */}
        <FooterInApp />
      </WishlistProvider>
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      

    </>
  )
}

export default App
