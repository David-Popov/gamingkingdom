import React from 'react'
import { FaPlus } from "react-icons/fa";
import { PiShoppingCart } from "react-icons/pi";


const AddToCart = ({extended}) => {
    if(extended != 'extended') {
        return (
            <button className="flex flex-row justify-center items-center text-white text-[16px] font-semibold border border-solid border-[1px] border-white w-[50px] h-[30px] hover:bg-primary hover:border-ducklingYellow">
                <FaPlus />
                <PiShoppingCart />
            </button>
        )
    } else {
        return (
            <button className="flex flex-row justify-center items-center text-white text-[16px] font-semibold border border-solid border-[1px] border-white w-full h-[30px] space-x-2 hover:bg-primary hover:border-ducklingYellow">
                <PiShoppingCart />
                <p className="text-[14px] font-semibold">Add to cart</p>
            </button>
        )
    }
}

export default AddToCart
