import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <>
      <div
        className="App-Download m-auto mt-16 justify-center text-center font-outfit text-3xl font-bold"
        id="App-Download"
      >
        <p>
          For Better Experience Download <br /> Tomato App
        </p>
        <div className="app-download-platform mb-10 flex justify-center">
          <img src={assets.play_store} alt="" />
          <img src={assets.app_store} alt="" />
        </div>
      </div>
    </>
  );
};

export default AppDownload;
