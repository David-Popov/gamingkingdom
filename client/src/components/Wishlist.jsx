import React from 'react'
import { useWhishlist } from '../contexts/WishlistContext'; // Import the useWishlist hook
import GameCard from './GameCard'; // Assuming you want to reuse the GameCard component
import { BsPersonCircle } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";


const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useWhishlist(); // Access the wishlist and the removeFromWishlist function

    return (
        <div className="flex flex-col items-center w-full py-8 bg-secondary text-white">
            <div className="flex flex-row w-[63%] h-auto items-center font-semibold text-[24px]">
                <div className="pr-3"><BsPersonCircle /></div>
                <div>User 1</div>
            </div>
            <div className="flex flex-row pt-4">
                <div className="flex flex-col items-start w-[220px] h-[120px] bg-[#5825CC] py-2 px-4 text-white">
                    <div className="pt-2 pb-8 font-semibold text-[20px]">
                        Product name
                    </div>
                    <div className="flex flex-row items-center shadow-inner">
                        <input type="text" className="bg-highlight w-[160px]"/>
                        <div className="text-[20px] px-2">
                            <CiSearch />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center px-6">
                    <div className="flex flex-row justify-between">
                        <p className=''>Results found: {wishlist.length}</p>
                        <div className="flex flex-row items-center">
                            <IoFilter />
                            <p>Alphabet: A-Z</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wishlist
