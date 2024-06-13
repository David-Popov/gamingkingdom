import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
// import { useWhishlist } from '../contexts/WishlistContext';
import AddToWish from '../components/AddToWish'

const GameCard = ({id, cover, title, region, price, likes}) => {
  const [isHovered, setIsHovered] = useState(false);
  // const [ isWishlisted, setIsWishlisted] = useState(false);
  // const { addToWishlist, removeFromWishlist } = useWhishlist();

  const navigate = useNavigate()
    const [selectedGame, setSelectedGame] = useState(null)
   
    useEffect(() => {
        if(selectedGame) {
            navigate('/info', { state: { game: selectedGame }})
        }
    }, [selectedGame, navigate, ])

    const handleNavigate = (game) => () => {
        setSelectedGame(game);
    };

  return (
    <div className={`flex flex-col w-[225px] h-[410px] text-white cursor-pointer `} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* {console.log('in game card -->', id)} */}
      {isHovered && <AddToWish id={id} cover={cover} title={title} region={region} price={price} likes={likes}/>}

      <div onClick={handleNavigate({id, cover, title, region, price, likes})}>
        <img src={cover} alt="Cover" className="w-full h-[255px]"/>
        <div className="flex flex-col min-h-[180px] items-left p-2 bg-primary">
          <h2 className="pb-2">{title}</h2>
          <div className='flex flex-col'>
            <h2 className="pb-2 text-green-500">{region}</h2>
            <p className="text-dimWhite">From</p>
            <h1>{price}</h1>
            <span className="flex flex-row text-dimWhite items-center">
                <span className="text-[18px] pr-1"><CiHeart /> </span>
                <p className="text-[14px]">{likes}</p>
            </span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default GameCard
