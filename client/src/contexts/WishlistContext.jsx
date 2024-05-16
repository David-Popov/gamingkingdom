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
        // console.log("Before being added to wishlist:", game)

        if(!wishlist.find(item => item.id === game.id)) {
            setWishlist([...wishlist, game]);
        }
        console.log("After being added to wishlist:", game)
        // console.log('wishlist -->', wishlist);
    };

    const removeFromWishlist = (gameId) => {
        setWishlist(wishlist.filter(item => item.id !== gameId));
        console.log('REMOVED FROM wishlist -->', wishlist);
    };

    return (
        <WhishlistContext.Provider value={{wishlist, addToWishlist, removeFromWishlist}}>
            {children}
        </WhishlistContext.Provider>
    )
}
