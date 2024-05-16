import React, { useState } from 'react'
import { useWhishlist } from '../contexts/WishlistContext';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const AddToWish = ({id, cover, title, region, price, likes}) => {
    const [ isWishlisted, setIsWishlisted] = useState(false);
    const { addToWishlist, removeFromWishlist } = useWhishlist();

    return (
        <div className="flex flex-row-reverse items-center w-[220px] absolute">
          <button className="flex text-[24px] text-tertiatry pt-3 justify-center font-bold w-[30px] h-[70px] bg-gray-400 bg-opacity-70	hover: bg-gray-50 hover:bg-opacity-80" onClick={() => {
            if(!isWishlisted) {
              addToWishlist({id, cover, title, region, price, likes})
              setIsWishlisted(true);
            } else {
              removeFromWishlist(id)
              setIsWishlisted(false);
            }
          }}>                    
            {isWishlisted ? <FaHeart /> : <FaRegHeart />}
          </button>
        </div>
    )
}

export default AddToWish
