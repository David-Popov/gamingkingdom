import React from 'react';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import ButtonSecondary from '../components/ButtonSecondary';

const CartPage = () => {
    const { cartItems } = useCart(); // Assumed your cart context provides `cartItems`

    return (
        <div className="flex flex-row justify-center bg-secondary min-h-[57.7vh] h-auto text-white items-start w-full space-x-10 py-10">
            <div className="flex flex-col bg-highlight min-h-[400px] w-[40%]">
                {console.log('Cart Page Items --> ', cartItems)}
                <div className="text-[24px] text-center w-[15%] pt-2 text-white">My cart</div>
                <div className="flex flex-col items-center w-full space-y-2 py-4">
                    {/* {cartItems.length > 0 ? (
                        <div className="flex flex-col items-center w-full space-y-2 py-4">
                            {cartItems.map(item => (
                                <div className="w-[95%]">
                                    <CartItem key={item.id} game={item} seller={item.seller} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-[24px] text-center py-4">Your shopping cart is empty</div>
                    )} */}
                    {cartItems && cartItems.map(item => (
                        <CartItem key={item.id} game={item} seller={item.seller} />
                    ))}  
                </div>
            </div>
            <div className="flex flex-col justify-center items-center  w-[20%]">
                <div className="flex flex-col bg-highlight w-full p-2 space-y-4">
                    <div className="text-[24px] text-center w-[15%] text-white">Summary</div>
                    <div className="flex flex-col">
                        <div className="w-full">
                            <ButtonSecondary text='Proceed to checkout' extended='extended' />
                        </div>
                        <div className="flex flex-row justify-between w-full py-2">
                            <div>
                                {cartItems.length} products
                            </div>
                            <div>
                                $PRICE
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                            <div>
                                Service fee
                            </div>
                            <div>
                                --
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row bg-highlight w-full justify-between p-2 mt-1">
                    <div>
                        Total:
                    </div>
                    <div className="text-[26px]">
                        $PRICE
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
