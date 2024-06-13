import React from "react";
import Footer from "../components/Footer";
import eneba_logo from "../assets/eneba_logo.png";
import {
  FaSteamSymbol,
  FaDiscord,
  FaTwitch,
  FaTwitter,
  FaFacebookF,
  FaApple,
  FaRegCircle,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <>
      <div className="flex text-white bg-secondary md:bg-primary h-[75vh] sm:h-[80vh] justify-center items-center px-[3rem] sm-px[4rem]">
        <h1 className="hidden md:flex mb-5 text-[96px] font-bold text-left pr-[10rem] leading-[90px]">
          Hi!
          <br />
          It’s nice to see you!
        </h1>

        <div className="flex flex-col bg-secondary w-[400px] h-[700px] p-8">
          <h2 className="text-2xl">Create Account</h2>
          <div className="flex flex-row text-[14px] mb-6">
            <p>Already have an account?</p>
            <a
              href="#"
              className="pl-1 text-ducklingYellow hover:text-yellow-500"
            >
              Login
            </a>
          </div>

          <form action="#">
            <div className="mb-3">
              <input
                type="email"
                className="w-full p-2 bg-tertiatry text-dimWhite"
                placeholder="Email"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="w-full p-2 bg-tertiatry text-dimWhite"
                placeholder="Password"
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="w-full p-2 bg-tertiatry text-dimWhite"
                placeholder="Repeat Password"
              />
            </div>

            <div>
              <a
                href="#"
                className="inline-block text-sm text-ducklingYellow hover:text-yellow-500 mt-4"
              >
                Show password
              </a>
              <div className="flex flex-col">
                <span className="flex flex-row">
                  <span className="mt-1 mr-1 text-[11px]">
                    <FaRegCircle />
                  </span>
                  <p className=" text-[13px]">At least 8 characters</p>
                </span>
                <span className="flex flex-row">
                  <span className="mt-1 mr-1 text-[11px]">
                    <FaRegCircle />
                  </span>
                  <p className=" text-[13px]">
                    At least one number &#40;0-9&#41; or special symbol
                  </p>
                </span>
              </div>
              <button
                type="submit"
                className="w-full bg-ducklingYellow text-black hover:bg-yellow-500 p-2 mt-3"
              >
                Create Account
              </button>
            </div>
          </form>

          <div className="flex items-center my-4">
            <div className="border-t border-gray-300 flex-grow mr-3"></div>
            <div>or</div>
            <div className="border-t border-gray-300 flex-grow ml-3"></div>
          </div>

          <div className="mb-4">
            <ul className="flex flex-row mb-6">
              <li className="flex flex-row block text-center h-[40px] w-[120px] bg-white p-2 mr-2">
                <span className="text-[14px] mx-2 mt-1">
                  <FcGoogle />
                </span>
                <a href="#" className="text-black font-semibold mr-2">
                  Google
                </a>
              </li>
              <li className="flex flex-row block text-center h-[40px] w-[120px] bg-blue-800 p-2 mr-2">
                <span className="text-[14px] mx-2 mt-1">
                  <FaFacebookF />
                </span>
                <a href="#" className="text-white font-semibold mr-2">
                  Facebook
                </a>
              </li>
              <li className="flex flex-row block text-center h-[40px] w-[120px] bg-black p-2 mr-2">
                <span className="text-[14px] mx-2 mt-1">
                  <FaApple />
                </span>
                <a href="#" className="text-white font-semibold mr-2">
                  Apple
                </a>
              </li>
            </ul>

            <a
              href="#"
              className="flex flex-row block text-center text-white border-solid border-2 border-white pt-2"
            >
              <span className="mx-6 pb-1 text-[30px] text-white cursor-pointer hover:text-ducklingYellow text-center">
                <FaSteamSymbol />
              </span>
              <span className="mx-6 pb-1 text-[30px] text-white cursor-pointer hover:text-ducklingYellow text-center">
                <FaDiscord />
              </span>
              <span className="mx-6 pb-1 text-[30px] text-white cursor-pointer hover:text-ducklingYellow text-center">
                <FaTwitch />
              </span>
              <span className="mx-6 pb-1 text-[30px] text-white cursor-pointer hover:text-ducklingYellow text-center">
                <FaTwitter />
              </span>
            </a>
            <div className="flex flex-col mt-6">
                <p className="text-[14px] leading-[18px]">
                    By creating account I confirm I am at least 16 and <br /> agree to Eneba <a href="#" className="text-blue-300 hover:text-blue-500">Terms and Conditions</a> and <br /> <a href="#" className="text-blue-300 hover:text-blue-500">Privacy Notice.</a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
