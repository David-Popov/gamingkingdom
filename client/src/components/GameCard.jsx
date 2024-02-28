import React from 'react'
import { CiHeart } from "react-icons/ci";

const GameCard = ({cover, title, region, price, likes}) => {
  return (
    <div className={`flex flex-col w-[225px] h-[410px] text-white cursor-pointer`}>
      <img src={cover} alt="Cover" className={`w-full h-[255px]`}/>
      <div className="flex flex-col items-left p-2 bg-primary">
        <h2 className="pb-2">{title}</h2>
        <h2 className="pb-2 text-green-500">{region}</h2>
        <p className="text-dimWhite">From</p>
        <h1>{price}</h1>
        <span className="flex flex-row text-dimWhite items-center">
            <span className="text-[18px] pr-1"><CiHeart /> </span>
            <p className="text-[14px]">{likes}</p>
        </span>
      </div>
    </div>
  )
}

export default GameCard
