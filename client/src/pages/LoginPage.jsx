import React from "react";
import Footer from "../components/Footer";

import { FaSteamSymbol, FaDiscord, FaTwitch, FaTwitter, FaFacebookF, FaApple } from "react-icons/fa";
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

          <div className="flex flex-col bg-secondary w-[370px] h-[600px] p-8">
            <h2 className="text-2xl">Log in</h2>
            <div className="flex flex-row text-[14px] mb-6">
              <p>New user?</p>
              <a href="#" className="pl-1 text-ducklingYellow hover:text-yellow-500">Create account</a>
            </div>
            <div className="mb-4">
              <span className="flex flex-row block text-center bg-white p-2">
                <span className="text-[20px] ml-2 mr-10"><FcGoogle /></span>
                <a href="#" className="text-black font-semibold">
                Continue with Google
              </a>
              </span>
              <span className="flex flex-row block text-center bg-blue-800 p-2 my-2">
                <span className="text-[20px] ml-2 mr-10"><FaFacebookF /></span>
                <a href="#" className="text-white font-semibold">
                Continue with Facebook
              </a>
              </span>
              <span className="flex flex-row block text-center bg-black p-2 mb-2">
                <span className="text-[20px] ml-2 mr-10"><FaApple /></span>
                <a href="#" className="text-white font-semibold">
                Continue with Apple
              </a>
              </span>
              <a href="#" className="flex flex-row block text-center text-white border-solid border-2 border-white pt-2">
                <span className="mx-6 pb-1 text-[30px] text-white cursor-pointer hover:text-ducklingYellow text-center"><FaSteamSymbol /></span>
                <span className="mx-6 pb-1 text-[30px] text-white cursor-pointer hover:text-ducklingYellow text-center"><FaDiscord /></span>
                <span className="mx-6 pb-1 text-[30px] text-white cursor-pointer hover:text-ducklingYellow text-center"><FaTwitch /></span>
                <span className="mx-6 pb-1 text-[30px] text-white cursor-pointer hover:text-ducklingYellow text-center"><FaTwitter /></span>
              </a>
            </div>

            <div className="flex items-center my-4">
              <div className="border-t border-gray-300 flex-grow mr-3"></div>
              <div>or</div>
              <div className="border-t border-gray-300 flex-grow ml-3"></div>
            </div>

            <form action="#">
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-2 bg-tertiatry text-dimWhite"
                  placeholder="Email"
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="w-full p-2 bg-tertiatry text-dimWhite"
                  placeholder="Password"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-ducklingYellow text-black hover:bg-yellow-500 p-2"
                >
                  Log in
                </button>
                <a
                  href="#"
                  className="inline-block text-sm text-ducklingYellow hover:text-yellow-500 mt-4"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
      </div>
    </>
  );
};

export default LoginPage;
