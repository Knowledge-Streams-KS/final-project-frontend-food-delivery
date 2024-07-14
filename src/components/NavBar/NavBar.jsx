import React, { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <>
      <header className="w-full">
        <nav>
          <div className="navbar flex items-center justify-between px-24 py-10">
            <div className="logo w-[500px]">
              <img src={assets.logo} alt="" className="h-9" />
            </div>
            <div className="distance flex justify-around gap-x-32">
              <ul className="navbar-menu list-non flex gap-x-16 font-outfit text-[18px] text-ulColor">
                <li
                  onClick={() => {
                    setMenu("Home");
                  }}
                  className={`cursor-pointer border-b-2 ${
                    menu === "Home" ? "border-[#49557e]" : "border-transparent"
                  }`}
                >
                  Home
                </li>
                <li
                  onClick={() => {
                    setMenu("Menu");
                  }}
                  className={`cursor-pointer border-b-2 ${
                    menu === "Menu" ? "border-[#49557e]" : "border-transparent"
                  }`}
                >
                  Menu
                </li>
                <li
                  onClick={() => {
                    setMenu("Mobile-app");
                  }}
                  className={`cursor-pointer border-b-2 ${
                    menu === "Mobile-app"
                      ? "border-[#49557e]"
                      : "border-transparent"
                  }`}
                >
                  Mobile-app
                </li>
                <li
                  onClick={() => {
                    setMenu("Contact-Us");
                  }}
                  className={`cursor-pointer border-b-2 ${
                    menu === "Contact-Us"
                      ? "border-[#49557e]"
                      : "border-transparent"
                  }`}
                >
                  Contact Us
                </li>
              </ul>

              <div className="navbar-right flex items-center gap-20">
                <img src={assets.search_icon} alt="" />
                <div className="img-search-icon relative">
                  <img src={assets.basket_icon} alt="" />
                  <div className="dot absolute right-[-8px] top-[-8px] min-h-[10px] min-w-[10px] rounded-md bg-tomato"></div>
                </div>
                <div className="button cursor-pointer rounded-[50px] border-[1px] border-solid border-[tomato] bg-transparent p-[10px] px-[30px] font-outfit text-[16px] text-ulColor transition duration-[0.3s] hover:bg-[#fff4f2]">
                  <button>Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
