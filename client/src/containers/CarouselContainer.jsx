import React from "react";
import { PiInfoLight } from "react-icons/pi";
import Button from '../components/Button';
import Tooltip from '../components/Tooltip';
import CardCarousel from "../components/CardCarousel";
import { Link } from "react-router-dom";



const CarouselContainer = ({bg, games, heading, tooltip, btn_link}) => {
  return (
    <div className={`flex flex-row bg-${bg} pt-4 h-[670px] justify-center`}>
      <div className="flex flex-col items-center ">
        <div className="flex flex-row py-6 w-[63%] items-start text-left">
          <h1 className="text-white text-[32px] font-semibold pr-2">
            {heading}
          </h1>
          <div className="">
            <Tooltip
              content={tooltip}
            >
              <span className="text-dimWhite text-[20px] mx-2">
                <PiInfoLight />
              </span>
            </Tooltip>
          </div>
        </div>
        <div className="flex items-center justify-center">
            <CardCarousel games={games} />
        </div>
        <div className="mt-16">
            <Button text="Show all"><Link to={btn_link}></Link></Button>
        </div>
      </div>
    </div>
  );
};

export default CarouselContainer;
