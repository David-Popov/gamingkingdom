import React from "react";
import CategoryCard from "./CategoryCard";
import Button from "./Button";
import { Link } from "react-router-dom";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

// const Categories = [
//     {
//         numberOfGames: '291',
//         icon: <GiBatteredAxe />,
//         categoryName: 'Action' 
//     },
//     {
//         numberOfGames: '291',
//         icon: <GiBatteredAxe />,
//         categoryName: 'Action' 
//     },
//     {
//         numberOfGames: '291',
//         icon: <GiBatteredAxe />,
//         categoryName: 'Action' 
//     },
//     {
//         numberOfGames: '291',
//         icon: <GiBatteredAxe />,
//         categoryName: 'Action' 
//     },
//     {
//         numberOfGames: '291',
//         icon: <GiBatteredAxe />,
//         categoryName: 'Action' 
//     },
//     {
//         numberOfGames: '291',
//         icon: <GiBatteredAxe />,
//         categoryName: 'Action' 
//     },
//     {
//         numberOfGames: '291',
//         icon: <GiBatteredAxe />,
//         categoryName: 'Action' 
//     },
// ]

const FooterInApp = () => {
  return (
    <div className="flex flex-col text-white items-center bg-primary h-[250px] py-8">
      <div className="flex flex-row justify-evenly w-[60%] items-start">
        <div className="flex flex-col items-left">
          <h3>About Eneba</h3>
          <div className="flex flex-col text-[14px] text-dimWhite py-2">
            <p className="cursor-pointer hover:text-ducklingYellow">About us</p>
            <p className="cursor-pointer hover:text-ducklingYellow">Contact us</p>
            <p className="cursor-pointer hover:text-ducklingYellow">Careers</p>
          </div>
        </div>
        <div className="flex flex-col items-left">
          <h3>Buy</h3>
          <div className="flex flex-col text-[14px] text-dimWhite py-2">
            <p className="cursor-pointer hover:text-ducklingYellow">How to buy</p>
            <p className="cursor-pointer hover:text-ducklingYellow">Game list</p>
            <p className="cursor-pointer hover:text-ducklingYellow">Collections</p>
            <p className="cursor-pointer hover:text-ducklingYellow">Loyalty program</p>
          </div>
        </div>
        <div className="flex flex-col items-left">
          <h3>Help</h3>
          <div className="flex flex-col text-[14px] text-dimWhite py-2">
            <p className="cursor-pointer hover:text-ducklingYellow">FAQ</p>
            <p className="cursor-pointer hover:text-ducklingYellow">How to activate game</p>
            <p className="cursor-pointer hover:text-ducklingYellow">Create a ticket</p>
            <p className="cursor-pointer hover:text-ducklingYellow">Return policy</p>
          </div>
        </div>
        <div className="flex flex-col items-left">
          <h3>Help</h3>
          <div className="py-2">
            <Button text='Sell on Eneba' />
          </div>
        </div>
        <div className="flex flex-col items-left">
          <h3>Help</h3>
          <div className="flex flex-row space-x-4 py-2 text-[40px]">
            <div className="cursor-pointer hover:text-dimWhite">
              <FaFacebookF />
            </div>
            <div className="cursor-pointer hover:text-dimWhite">
              <FaTwitter />
            </div>
            <div className="cursor-pointer hover:text-dimWhite">
              <FaInstagram />
            </div>
            <div className="cursor-pointer hover:text-dimWhite">
              <IoLogoDiscord />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row self-center text-[12px] mt-8">
        <p>Copyright © 2024 Eneba. All Rights Reserved. JSC “Helis play”, Gyneju St. 4-333, Vilnius, the Republic of Lithuania </p>
        <p className="font-bold hover:text-ducklingYellow px-1 cursor-pointer">Terms and Conditions,</p>
        <p className="font-bold hover:text-ducklingYellow px-1 cursor-pointer">Privacy notice,</p>
        <p className="font-bold hover:text-ducklingYellow px-1 cursor-pointer">Cookie preferences.</p>
      </div>
    </div>

    // <div className={`flex flex-row bg-tertiatry pt-4 h-[470px] justify-center`}>
    //   <div className="flex flex-col items-center ">
    //     {/* <div className="flex flex- py-6 w-[60%] items-start text-left"> */}
    //     <h1 className="flex text-left py-6 w-full text-white text-[32px] font-semibold pr-2">
    //     Categories
    //     </h1>
    //     {/* </div> */}
    //     <div className="flex items-center justify-center">
    //         <div className="flex flex-row w-[80%] h-[280px] justify-center items-center">
    //             {Categories.map((cateogry, index) => (
    //                 <div key={index} className="flex-none justify-evenly w-[170px] h-[175px]">
    //                     <CategoryCard numberOfGames={cateogry.numberOfGames} icon={cateogry.icon} categoryName={cateogry.categoryName} />
    //                 </div>
    //             ))}
    //         </div>
    //     </div>
    //     <div>
    //       <Button text="Load more">
    //         <Link to={''}></Link>
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default FooterInApp;
