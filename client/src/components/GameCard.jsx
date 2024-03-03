import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { useWhishlist } from '../contexts/WishlistContext';

const GameCard = ({cover, title, region, price, likes}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToWishlist } = useWhishlist();

  return (
    <div className={`flex flex-col w-[225px] h-[410px] text-white cursor-pointer `} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>

      {isHovered && (
        <div className="flex flex-row-reverse items-center w-[220px] absolute">
          <button className="flex text-[24px] text-tertiatry pt-3 justify-center font-bold w-[30px] h-[70px] bg-gray-400 bg-opacity-70	hover: bg-gray-50 hover:bg-opacity-80" onClick={() => addToWishlist({cover, title, region, price, likes})}><CiHeart /></button>
        </div>
      )}

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
