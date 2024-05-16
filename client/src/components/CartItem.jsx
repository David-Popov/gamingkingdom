import React, { useState } from 'react';
import { GoTrash } from "react-icons/go";
import { games } from '../utils/gameObj';
import { useCart } from '../contexts/CartContext';

const CartItem = ({ game, seller }) => {
    const gameInCart = games.find(gameInGames => gameInGames.id === game.id);
    const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const increase = () => {
        increaseCartQuantity(game.id, seller.name);
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrease = () => {
        if (quantity > 1) {
            decreaseCartQuantity(game.id);
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    if (!gameInCart) {
        return null;
    }

    return (
        <div className="flex flex-row text-white bg-secondary h-[200px] items-stretch w-[95%]">
            <img src={gameInCart.cover} alt="Game Cover" className="h-full" />
            <div className="flex flex-col justify-between w-full p-4">
                <div className="flex flex-row justify-between">
                    <div>{seller}</div>
                    <GoTrash className="text-[22px] cursor-pointer hover:text-red-500" onClick={() => removeFromCart(game.id)} />
                </div>
                <div>
                    {gameInCart.title}
                </div>
                <div className="flex-grow"></div>
                <div className="flex flex-row justify-between items-center">
                    <div className="flex items-center text-[22px] space-x-2">
                        <button className="hover:text-ducklingYellow" onClick={decrease}>-</button>
                        <div>{quantity}</div>
                        <button className="hover:text-ducklingYellow" onClick={increase}>+</button>
                    </div>
                    <div>${quantity * gameInCart.price}</div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
