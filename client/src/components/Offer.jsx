import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { GoStarFill } from "react-icons/go";
import AddToCart from './AddToCart';
import ButtonSecondary from './ButtonSecondary';
import { useCart } from '../contexts/CartContext';


const Offer = ({game, seller}) => {
    const { increaseCartQuantity } = useCart()

    return (
        <div className="flex flex-row items-between w-[1220px] h-[85px] bg-highlight text-white p-6 mb-2">
            <div className="flex flex-row w-[80%] space-x-2 ">
                <div className="text-[36px] pr-2">
                    <BsPersonCircle />
                </div>
                <div className="flex flex-col items-center">
                    <p>{seller.name}</p>
                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-ducklingYellow"><GoStarFill /></div>
                        <p className="font-semibold">{seller.rating}</p>
                        <p>rating</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center w-[30%] space-x-4">
                <h2 className="text-[22px] text-white font-semibold">${game.price}</h2>
                <div onClick={() => {increaseCartQuantity(game.id, seller.name)}}>
                    <AddToCart />
                </div>
                <div>
                    <ButtonSecondary text="Buy now" />
                </div>
            </div>
        </div>
    )
}

export default Offer
