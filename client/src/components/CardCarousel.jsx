import React, { useRef } from 'react'
import GameCard from './GameCard'

const CardCarousel = ({games}) => {
    // const carouselRef = useRef(null);

    // const scrollLeft = () => {
    //     if (carouselRef.current) {
    //       carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' }); // Scroll by 200px to the left
    //     }
    //   };
      
    //   const scrollRight = () => {
    //     if (carouselRef.current) {
    //       carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' }); // Scroll by 200px to the right
    //     }
    //   };

    return (
    
        <div className="flex flex-row overflow-x-auto overflow-y-hidden w-[63%] h-[480px] self-center items-center custom-scrollbar -my-10 -mx-6">
            {games.map((game, index) => (
                <div key={index} className="flex-none justify-evenly mr-10 w-[200px] h-[375px] mb-[3rem]">
                    <GameCard cover={game.cover} title={game.title} region={game.region} price={game.price} likes={game.likes} />
                </div>
            ))}
        </div>
      
    )
}

export default CardCarousel
