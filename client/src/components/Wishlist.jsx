import React, { useEffect, useState } from 'react'
import { useWhishlist } from '../contexts/WishlistContext'; // Import the useWishlist hook
import GameCard from './GameCard'; // Assuming you want to reuse the GameCard component
import { BsPersonCircle } from "react-icons/bs";
import { CiSearch, CiHeart } from "react-icons/ci";
import { IoFilter } from "react-icons/io5";



const Wishlist = () => {
    const { wishlist } = useWhishlist(); // Access the wishlist and the removeFromWishlist function
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredWishlist, setFilteredWishlist] = useState(wishlist)
    const [sortFilter, setSortFilter] = useState('');

    useEffect(() => {
        let sortedAndFiltered = wishlist.filter(game => game.title.toLowerCase().includes(searchTerm.toLowerCase()))
        
        switch (sortFilter) {
            case '1':
                sortedAndFiltered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
                break;
            case '2':
                sortedAndFiltered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
                break;
            case '3':
                sortedAndFiltered.sort((a, b) => a.title.localeCompare(b.title))
                break;
            case '4':
                sortedAndFiltered.sort((a, b) => b.title.localeCompare(a.title))
                break;
        }
    
        setFilteredWishlist(sortedAndFiltered)
    }, [searchTerm, sortFilter, wishlist])

    return (
        <div className="flex flex-col items-center w-full min-h-[800px] py-8 bg-secondary text-white">
            <div className="flex flex-row w-[63%] h-auto items-center font-semibold text-[24px]">
                <div className="pr-3"><BsPersonCircle /></div>
                <div>User 1</div>
            </div>
            <div className="flex flex-row w-[63%] pt-4">
                <div className="flex flex-col items-start w-[220px] h-[120px] bg-[#5825CC] py-2 px-4 text-white">
                    <div className="pt-2 pb-8 font-semibold text-[20px]">
                        Product name
                    </div>
                    <div className="flex flex-row items-center shadow-inner">
                        <input 
                            type="text" className="bg-highlight w-[160px]"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="text-[20px] px-2">
                            <CiSearch />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full items-center px-6">
                    <div className="flex flex-row w-full justify-between">
                        <p className=''>Results found: {wishlist.length}</p>
                        <div className="flex flex-row items-center hover:text-ducklingYellow">
                            <IoFilter />            
                            <select value={sortFilter} onChange={(e) => setSortFilter(e.target.value)} className="bg-secondary border-none cursor-pointer">  
                                <option value="" className="bg-white text-black hover:bg-gray-300 hover:text-secondary">Select a filter</option>
                                <option value="1" className="bg-white text-black">Price: Low to High</option>
                                <option value="2" className="bg-white text-black">Price: High to Low</option>
                                <option value="3" className="bg-white text-black">Alphabet: A - Z</option>
                                <option value="4" className="bg-white text-black">Alphabet: Z - A</option>
                            </select>   
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center w-[45%] ">  
                <div className="flex flex-wrap justify-start items-start w-[85%] mt-4">
                    {filteredWishlist.map(game => (
                        <div key={game.id} className="w-1/3 pb-8">
                            <GameCard {...game} />
                        </div>
                    ))}
                </div>
                {filteredWishlist.length === 0 && (
                    <div className="text-center text-[22px] w-screen">
                        <div className="flex justify-center text-[60px] text-white pb-2"><CiHeart /></div>
                        <p>You don't have wishlisted products yet.</p>
                        <p className="font-bold">Add products to Wishlist and they will appear here.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Wishlist
