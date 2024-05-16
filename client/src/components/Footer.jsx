import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-[15vh] sm:h-[10vh] items-center bg-secondary md:bg-primary">
      <div className="flex flex-col md:flex-row items-center text-center text-white mt-2 sm:mt-6 mb-10 sm:mb-6">
        <a
          href="#"
          className="inline-block text-sm text-white pr-2 hover:underline"
        >
          Terms & Conditions
        </a>{" "}
        <a
          href="#"
          className="inline-block text-sm text-white pr-2 hover:underline"
        >
          Privacy notice
        </a>{" "}
        <a
          href="#"
          className="inline-block text-sm text-white pr-2 hover:underline"
        >
          Cookie preferences
        </a>{" "}
        <a
          href="#"
          className="inline-block text-sm text-white pr-2 hover:underline"
        >
          Support
        </a>
        <p className="text-center text-white text-sm mt-0.5">
          Copyright © 2024 Eneba. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
