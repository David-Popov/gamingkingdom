import React from "react";
import { PiInfoLight } from "react-icons/pi";
import GameCard from '../components/GameCard';
import gameCover1 from '../assets/gameCover1.png'
import Button from '../components/Button';
import Tooltip from '../components/Tooltip';
import CardCarousel from "../components/CardCarousel";

const games = [
    {
        cover: gameCover1,
        title: 'Evil Genius 2: World Domination Steam Key',
        region: 'LATIN AMERICA',
        price: '16.50',
        likes: 19,
    },
    {
        cover: gameCover1,
        title: 'Evil Genius 2: World Domination Steam Key',
        region: 'LATIN AMERICA',
        price: '16.50',
        likes: 19,
    },
    {
        cover: gameCover1,
        title: 'Evil Genius 2: World Domination Steam Key',
        region: 'LATIN AMERICA',
        price: '16.50',
        likes: 19,
    },
    {
        cover: gameCover1,
        title: 'Evil Genius 2: World Domination Steam Key',
        region: 'LATIN AMERICA',
        price: '16.50',
        likes: 19,
    },
    {
        cover: gameCover1,
        title: 'Evil Genius 2: World Domination Steam Key',
        region: 'LATIN AMERICA',
        price: '16.50',
        likes: 19,
    },
    {
        cover: gameCover1,
        title: 'Evil Genius 2: World Domination Steam Key',
        region: 'LATIN AMERICA',
        price: '16.50',
        likes: 19,
    },
    {
        cover: gameCover1,
        title: 'Evil Genius 2: World Domination Steam Key',
        region: 'LATIN AMERICA',
        price: '16.50',
        likes: 19,
    },
    {
        cover: gameCover1,
        title: 'Evil Genius 2: World Domination Steam Key',
        region: 'LATIN AMERICA',
        price: '16.50',
        likes: 19,
    },
]

const CarouselContainer = ({heading, tooltip}) => {
  return (
    <div className="flex flex-row bg-tertiatry pt-4 h-[670px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-row py-6 items-center mr-[40rem]">
          <h1 className="text-white text-[32px] font-semibold pb-2 pr-2">
            {heading}
          </h1>
          <div>
            <Tooltip
              content={tooltip}
            >
              <span className="text-dimWhite text-[20px] mx-2">
                <PiInfoLight />
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="pl-[22rem]">
            <CardCarousel games={games} />
        </div>
        <div className="ml-[24rem] mt-16">
            <Button text="Show all" />
        </div>
      </div>
    </div>
  );
};

export default CarouselContainer;
