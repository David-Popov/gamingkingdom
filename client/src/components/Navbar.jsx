import React from "react";
import NavDropdown from "./NavDropdown";
import eneba_logo_2 from "../assets/eneba_logo_2.png";
import { CiSearch, CiHeart } from "react-icons/ci";
import { PiShoppingCart } from "react-icons/pi";
import { MdPersonOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-secondary">
      <nav className="flex flex-row max-w-[1300px] bg-secondary p-5 items-center justify-between">
        <div className="display-block ml-10 px-2 cursor-pointer">
          <img src={eneba_logo_2} alt="Eneba" onClick={() => navigate('/')}/>
        </div>
        <span className="flex flex-row border-solid border-[1px] py-2 border-white mx-4">
          <span className="px-2  text-[35px] text-dimWhite">
            <CiSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="text-[24px] text-white font-semibold bg-secondary w-[400px]"
          />
        </span>
        <p className="items-center text-white hover:text-ducklingYellow cursor-pointer mr-8">
          English EU | EUR
        </p>
        <ul className="flex flex-row text-[35px] text-white px-2">
          <li className="mr-4 cursor-pointer hover:text-ducklingYellow" onClick={() => navigate('/wishlist')}>
            <CiHeart />
          </li>
          <li className="mr-6 cursor-pointer hover:text-ducklingYellow" onClick={() => navigate('/cart')}>
            <PiShoppingCart />
          </li>
          <li className="flex flex-row mr-2 items-center">
            <div className="flex flex-row items-center hover:text-ducklingYellow cursor-pointer" onClick={() => navigate('/login')}>
              <MdPersonOutline />
              <div className="text-[18px] ml-1">
                Log in
              </div>
            </div>

            <div className="text-[18px] px-1">|</div>
            <div className="text-[18px] hover:text-ducklingYellow cursor-pointer" onClick={() => navigate('/register')}>
              Register
            </div>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col items-center bg-highlight w-full h-[55px]">
        <ul className="flex flex-row justify-between max-w-[1300px] items-center text-dimWhite text-[18px]">
            <li className="mx-2 cursor-pointer hover:text-ducklingYellow hover:bg-primary px-3 pt-3 pb-4"><NavDropdown name={"Store"} /></li>
            <li className="mx-2 cursor-pointer hover:text-ducklingYellow hover:bg-primary px-3 pt-3 pb-4">Mobile games</li>
            <li className="mx-2 cursor-pointer hover:text-ducklingYellow hover:bg-primary px-3 pt-3 pb-4">Games</li>
            <li className="mx-2 cursor-pointer hover:text-ducklingYellow hover:bg-primary px-3 pt-3 pb-4">Gift Cards</li>
            <li className="mx-2 cursor-pointer hover:text-ducklingYellow hover:bg-primary px-3 pt-3 pb-4">Xbox</li>
            <li className="mx-2 cursor-pointer hover:text-ducklingYellow hover:bg-primary px-3 pt-3 pb-4">PSN</li>
            <li className="mx-2 cursor-pointer hover:text-ducklingYellow hover:bg-primary px-3 pt-3 pb-4">Nintendo</li>
            <li className="mx-2 cursor-pointer hover:text-ducklingYellow hover:bg-primary px-3 pt-3 pb-4">Mobile recharges</li>
            <li className="mx-2 cursor-pointer hover:text-ducklingYellow hover:bg-primary px-3 pt-3 pb-4">Software</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
