import React from "react";

import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div
      className="Footer mt-10 flex w-full flex-col items-center bg-[#323232] px-8 py-5 pt-20 font-outfit text-[#d9d9d9]"
      id="Footer"
    >
      <div className="footer-context grid w-4/5 grid-cols-4 justify-center gap-20">
        <div className="footer-context-right col-span-2 mb-5 flex flex-col items-start">
          <img src={assets.logo} alt="" className="mb-5" />
          <p className="mb-5 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            minima veniam libero accusamus a. Est suscipit veniam in pariatur
            voluptatem. Vel temporibus est blanditiis quae praesentium velit
            reiciendis, assumenda, harum sed quidem dolores quia.
          </p>
          <div className="social-media-icons flex cursor-pointer gap-3">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div className="footer-context-center col-span-1 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-white">Company</h2>
          <ul className="mt-2 cursor-pointer">
            <li className="mb-2">Home</li>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Delivery</li>
            <li className="mb-2">Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-context-right col-span-1 flex flex-col items-start">
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          <ul className="mt-2">
            <li className="mb-2">+92-34-567-89001</li>
            <li className="mb-2">contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className="mx-0 my-1 h-1 w-full border-none bg-[#e2e2e2]" />
      <p className="footer-copyright mt-5">
        Copyright 2023 @ Tomato.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
