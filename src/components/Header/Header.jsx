import React from "react";

const Header = () => {
  return (
    <>
      <div className="Header m-0 flex min-h-[6vh] items-center justify-center p-0 font-outfit">
        <div className="Image relative h-[34vw] w-full max-w-7xl bg-[url('header_img.png')] bg-contain bg-no-repeat">
          <div className="header-Contexts absolute bottom-[10%] left-[6vw] flex max-w-[50%] flex-col items-start gap-[1.5vw]">
            <h1 className="text-7xl font-bold text-white">
              Order your favourite Food!
            </h1>
            <p className="text-lg text-white">
              The menu boasted a vibrant selection, catering to diverse palates.
              Each dish promised an explosion of flavor, with fragrant spices
              mingling with fresh ingredients.
            </p>
            <button className="curser-pointer text-bold rounded-full bg-white px-8 py-4 text-[#747474] transition duration-300">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
