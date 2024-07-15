import React from "react";
import { useState } from "react";
import "./Header.css";
const Header = () => {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="Header">
      <div className="header-contents">
        <h2>Order your Favourite food here</h2>
        <p>
          {" "}
          choose from a diverse menu featuring a detectable array of dishes
          crafted with the finnest ingredients and culniary experts is to
          satisfy your cravings and elevate your dinning experience, one
          delicious meal at a time{" "}
        </p>
        <button>
          <a
            href="#explore-menu"
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            View Menu
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
