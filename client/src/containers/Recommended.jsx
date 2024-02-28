import React from 'react'
import { PiInfoLight } from "react-icons/pi";
import GameCard from '../components/GameCard';
import gameCover1 from '../assets/gameCover1.png'
import Button from '../components/Button';
import Tooltip from '../components/Tooltip';

const Recommended = () => {
    return (
        <div className="flex flex-col bg-secondary py-4 items-center h-[650px]">
            <div className="flex flex-col items-center">
                <div className="flex flex-row py-6">
                    <h1 className="text-white text-[32px] font-semibold pt-3 pr-2">Recommended for you</h1>
                    <div>
                        <Tooltip content={`Recommendations are based on user activity data, including views, cart additions, wishlist additions, and purchases. When logged in, recommendations are personalized; otherwise, they are based on the data from users from the same country.`}
                            >
                            <span className="text-dimWhite text-[20px] mx-2"><PiInfoLight /></span>
                        </Tooltip>
                    </div>
                </div>
                <div className="flex flex-row items-between w-[1200px]">
                    <div className="pl-2 pr-4">
                        <GameCard cover={gameCover1} title={'Evil Genius 2: World Domination Steam Key'} region={'LATIN AMERICA'} price={'16.50'} likes={11} w={'225px'} h={'410px'} ch={'255px'} />
                    </div>
                    <div className="pr-4">
                        <GameCard cover={gameCover1} title={'Evil Genius 2: World Domination Steam Key'} region={'LATIN AMERICA'} price={'16.50'} likes={11} w={'225px'} h={'410px'} ch={'255px'} />
                    </div>
                    <div className="pr-4">
                        <GameCard cover={gameCover1} title={'Evil Genius 2: World Domination Steam Key'} region={'LATIN AMERICA'} price={'16.50'} likes={11} w={'225px'} h={'410px'} ch={'255px'} />
                    </div>
                    <div className="pr-4">
                        <GameCard cover={gameCover1} title={'Evil Genius 2: World Domination Steam Key'} region={'LATIN AMERICA'} price={'16.50'} likes={11} w={'225px'} h={'410px'} ch={'255px'} />
                    </div>
                    <div className="pr-4">
                        <GameCard cover={gameCover1} title={'Evil Genius 2: World Domination Steam Key'} region={'LATIN AMERICA'} price={'16.50'} likes={11} w={'225px'} h={'410px'} ch={'255px'} />
                    </div>
                </div>
                <div className="items-right mt-12">
                    <Button text="See all" />
                </div>
            </div>
        </div>
    )
}

export default Recommended
