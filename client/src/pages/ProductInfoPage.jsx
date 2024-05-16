import React, { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaRegCheckCircle, FaPlaystation } from "react-icons/fa";
import { LuKeyRound } from "react-icons/lu";
import { PiInfoLight } from "react-icons/pi";
import PromotedOfeer from '../components/PromotedOfeer';
import Tooltip from '../components/Tooltip';
import Offer from '../components/Offer';
import Button from '../components/Button';
import Genre from '../components/Genre';
import SystemRequirements from '../components/SystemRequirements';
import OtherDetails from '../components/OtherDetails';
import { useCart } from '../contexts/CartContext';
import InfoToWish from '../components/InfoToWish';

const sellers = [
    {
        name: 'Generic seller 1',
        rating: 9.58
    },
    {
        name: 'Generic seller 2',
        rating: 8.58
    },
    {
        name: 'Generic seller 3',
        rating: 9.24
    },
    {
        name: 'Generic seller 4',
        rating: 9.67
    },
    {
        name: 'Generic seller 5',
        rating: 9.82
    }
]

const ProductInfoPage = () => {
    const location = useLocation()
    const {game} = location.state
    const [visibleOffers, setVisibleOffers] = useState(3)
    const [promotedSeller, setPromotedSeller] = useState(null)
    const [shouldScroll, setShouldScroll] = useState(false)
    const offersRef = useRef(null)

    const { increaseCartQuantity } = useCart()

    useEffect(() => {
        setPromotedSeller(sellers[Math.floor(Math.random() * sellers.length)]);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const scrollToOffers = () => {
        offersRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const loadMoreOffers = () => {
        setVisibleOffers(sellers.length)
    }

    return (
        <div className="flex flex-col items-center bg-secondary">        
            <div className="flex flex-row w-full items-between text-white">
                <div className="flex flex-col w-[75%] items-center py-6"> 
                    <div className="flex flex-row w-[80%] items-between space-x-6">
                        <div>
                            <img src={game.cover} alt="Game Cover" />
                        </div>
                        <div className="flex flex-col w-full items-center">
                            <div className="flex flex-row w-full justify-between">
                                <h3 className="text-[28px] font-semibold -mt-2">{game.title}</h3>
                                <div className="">
                                    {/* <div className="text-[25px]"><CiHeart /></div>
                                    <div className="text-[18px]">{game.likes}</div> */}
                                    <InfoToWish id={game.id} cover={game.cover} title={game.title} region={game.region} price={game.price} likes={game.likes}/>
                                </div>
                            </div>
                            <div className="flex flex-row w-full items-between font-semibold space-x-10 pt-4">
                                <div className="flex flex-col items-left">
                                    <div className="text-green-300 text-[32px] pr-2">
                                        <FaRegCheckCircle />
                                    </div>
                                    <p className="pt-2">{game.region}</p>
                                </div>
                                <div className="flex flex-col items-left">
                                    <div className="text-blue-500 text-[32px] pr-2">
                                        <FaPlaystation />
                                    </div>
                                    <p className="pt-2">PSN</p>
                                </div>
                                <div className="flex flex-col items-left">
                                    <div className="text-[32px] pr-2">
                                        <LuKeyRound />
                                    </div>
                                    <p className="pt-2">Digital Key</p>
                                </div>
                            </div>
                            <div className="flex flex-row items-start w-full space-x-2 pt-6">
                                <div><Genre text='Strategy' /></div>
                                <div><Genre text='RTS' /></div>
                                <div><Genre text='Action' /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-[25%] py-6">
                    <div className="w-full">
                        {promotedSeller && <PromotedOfeer seller={promotedSeller} price={game.price} />}
                    </div>
                    <div className="flex flex-row items-end pt-4 text-[14px] text-ducklingYellow hover:text-yellow-500 cursor-pointer" onClick={scrollToOffers}>
                        <p>+{sellers.length-1} offers from ${game.price}</p>
                    </div>
                </div>
            </div>
            <div ref={offersRef} className="flex flex-row w-[85%] items-start text-white text-[20px] font-bold space-x-1 pb-6">
                <p className="text-green-300">{sellers.length-4}</p>
                <p>other offers</p>
                <div className="text-[22px] text-dimWhite mt-2">
                    <Tooltip content={'Other offers are indicated from lowest to highest price'}>
                        <PiInfoLight />
                    </Tooltip>
                </div>
            </div>
            <div className="flex flex-col items-start w-[85%] pb-10">
                {sellers.filter(seller => seller !== promotedSeller)
                            .slice(0, visibleOffers)
                            .map(seller => (
                                <Offer key={seller.name} game={game} seller={seller} />
                            ))}       
            </div>
            {visibleOffers < sellers.length && (
                <div className="flex flex-row justify-start w-[35%] pb-10" onClick={loadMoreOffers}>
                    <Button text={`Load ${sellers.length - 4} more offers`} />
                </div>
            )}
            <div className="flex items-start w-[85%] pb-6">
                <SystemRequirements />
            </div>
            <div className="flex items-start w-[85%] pb-20">
                <OtherDetails />
            </div>
        </div>
    )
}

export default ProductInfoPage
