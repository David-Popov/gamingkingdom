import React from "react";
import CategoryCard from "./CategoryCard";
import Button from "./Button";
import { Link } from "react-router-dom";

import { GiBatteredAxe } from "react-icons/gi";


const CategoriesItems = [
    {
        numberOfGames: '291',
        icon: <GiBatteredAxe />,
        categoryName: 'Action' 
    },
    {
        numberOfGames: '291',
        icon: <GiBatteredAxe />,
        categoryName: 'Action' 
    },
    {
        numberOfGames: '291',
        icon: <GiBatteredAxe />,
        categoryName: 'Action' 
    },
    {
        numberOfGames: '291',
        icon: <GiBatteredAxe />,
        categoryName: 'Action' 
    },
    {
        numberOfGames: '291',
        icon: <GiBatteredAxe />,
        categoryName: 'Action' 
    },
    {
        numberOfGames: '291',
        icon: <GiBatteredAxe />,
        categoryName: 'Action' 
    },
    {
        numberOfGames: '291',
        icon: <GiBatteredAxe />,
        categoryName: 'Action' 
    },
]

const Categories = () => {
  return (
    <div className={`flex flex-row bg-tertiatry pt-4 h-[470px] justify-center`}>
      <div className="flex flex-col items-center ">
        {/* <div className="flex flex- py-6 w-[60%] items-start text-left"> */}
        <h1 className="flex text-left py-6 w-full text-white text-[32px] font-semibold pr-2">
        Categories
        </h1>
        {/* </div> */}
        <div className="flex items-center justify-center">
            <div className="flex flex-row w-[80%] h-[280px] justify-center items-center">
                {CategoriesItems.map((cateogry, index) => (
                    <div key={index} className="flex-none justify-evenly w-[170px] h-[175px]">
                        <CategoryCard numberOfGames={cateogry.numberOfGames} icon={cateogry.icon} categoryName={cateogry.categoryName} />
                    </div>
                ))}
            </div>
        </div>
        <div>
          <Button text="Load more">
            <Link to={''}></Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
