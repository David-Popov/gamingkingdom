import React from 'react'
import { GoStarFill } from "react-icons/go";
import { PiInfoLight } from "react-icons/pi";
import Tooltip from './Tooltip';
import ButtonSecondary from './ButtonSecondary';
import AddToCart from './AddToCart';
import { useCart } from '../contexts/CartContext';


const PromotedOfeer = ({seller, price}) => {
    const { increaseCartQuantity } = useCart()

    return (
        <div className="flex flex-col items-start bg-tertiatry w-[350px] h-[256px]">
            <div className="w-full h-[30px] items-center bg-highlight text-ducklingYellow">
                <p className="flex justify-center text-[14px] font-semibold py-1 px-2">PROMOTED OFFER</p>
            </div>
            <div className="flex flex-col justify-between w-full h-full p-6">
                <div className="space-y-1">
                    <div className="text-[14px] font-semibold">
                        {seller.name}
                    </div>
                    <div className="flex flex-row items-center space-x-1">
                        <div className="text-[12px] font-semibold text-ducklingYellow"><GoStarFill /></div>
                        <p className="text-[12px] font-semibold">{seller.rating} rating</p>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <div className="text-[26px] font-bold">${price}</div>
                        <Tooltip content={'Price is not final. Service fee applies at the checkout.'}>
                            <div className="text-[20px] text-dimWhite">
                                <PiInfoLight />
                            </div>
                        </Tooltip>
                        <p className="text-[14px] text-dimWhite">Price is not final</p>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <ButtonSecondary text={'Buy now'} extended={'extended'} />
                </div>
                <div className="w-full flex justify-center" onClick={() => {increaseCartQuantity(game.id, seller.name)}}>
                    <AddToCart extended={'extended'} />
                </div>
            </div>
        </div>
    )
}

export default PromotedOfeer
