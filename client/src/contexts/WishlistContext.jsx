import React, { createContext, useContext, useEffect, useState } from 'react'

const WhishlistContext = createContext();

export const useWhishlist = () => useContext(WhishlistContext);

export const WishlistProvider = ({children}) => {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlist(storedWishlist);
    }, []);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    const addToWishlist = (game) => {
        if(!wishlist.find(item => item.id === game.id)) {
            setWishlist([...wishlist, game]);
        }
    };

    const removeFromWishlist = (gameId) => {
        setWishlist(wishlist.filter(item => item.id !== gameId));
    };

    return (
        <WhishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}}>
            {children}
        </WhishlistContext.Provider>
    )
}
