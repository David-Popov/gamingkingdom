import React from 'react'
import HeroCarousel from '../components/HeroCarousel'
import Recommended from '../containers/Recommended'
import CarouselContainer from '../containers/CarouselContainer'
import Categories from '../components/Categories'
import { games } from '../utils/gameObj'

const LandingPage = () => {
  return (
    <div>
      <HeroCarousel />
      <Recommended />
      <CarouselContainer bg='tertiatry' games={games} heading={'Top games'} tooltip={'Recommendations based on most purchased products by our users.'} btn_link={''} />
      <CarouselContainer bg='secondary' games={games} heading={'Best Selling eGift Cards'} tooltip={'Recommendations based on most purchased products by our users.'} btn_link={''} />
      <CarouselContainer bg='tertiatry' games={games} heading={'Best Selling Gift Cards'} tooltip={'Recommendations based on most purchased products by our users.'} btn_link={''} />
      <CarouselContainer bg='secondary' games={games} heading={'Upcoming games'} tooltip={'Products available for pre-ordering selected by relevance.'} btn_link={''} />
      <Categories />
    </div>
  )
}

export default LandingPage
