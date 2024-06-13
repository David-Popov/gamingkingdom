import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import GameCard from './GameCard'

const CardCarousel = ({games}) => {
    // const navigate = useNavigate()
    // const [selectedGame, setSelectedGame] = useState(null)
   
    // useEffect(() => {
    //     if(selectedGame) {
    //         navigate('/info', { state: { game: selectedGame }})
    //     }
    // }, [selectedGame, navigate, ])

    // const handleNavigate = (game) => () => {
    //     setSelectedGame(game);
    // };

    return (
    
        <div className="flex flex-row overflow-x-auto overflow-y-hidden w-[63%] h-[480px] self-center items-center custom-scrollbar -my-10 -mx-6">
            {games.map((game) => (
                <div key={game.id} className="flex-none justify-evenly mr-10 w-[200px] h-[375px] mb-[3rem]" >
                    <GameCard id={game.id} cover={game.cover} title={game.title} region={game.region} price={game.price} likes={game.likes} />
                    {/* {console.log('game -->', game)} */}
                </div>
            ))}
        </div>
      
    )
}

export default CardCarousel
