import React, { useState } from 'react'
import { useWhishlist } from '../contexts/WishlistContext';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const InfoToWish = ({id, cover, title, region, price, likes}) => {
    const [ isWishlisted, setIsWishlisted] = useState(false);
    const { addToWishlist, removeFromWishlist } = useWhishlist();

    return (
        <div className="flex flex-col items-center w-[220px]">
          <button className="text-[24px] text-white pt-3font-bold w-[30px] h-[70px]" onClick={() => {
            if(!isWishlisted) {
              addToWishlist({id, cover, title, region, price, likes})
              setIsWishlisted(true);
            } else {
              removeFromWishlist(id)
              setIsWishlisted(false);
            }
          }}>
                <div className="flex flex-col justify-center items-center">
                    {isWishlisted ? <FaHeart className="text-[28px] cursor-pointer" /> : <FaRegHeart className="text-[28px] cursor-pointer" />}
                    <div className="text-[18px]">{likes}</div>
                </div>
          </button>
        </div>
    )
}

export default InfoToWish
