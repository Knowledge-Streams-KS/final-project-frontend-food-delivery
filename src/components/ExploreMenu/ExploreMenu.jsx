import React from "react";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div className="Menu flex items-center justify-center align-middle">
        <div
          id="Explore-menu"
          className="Explore-menu mx-[10px] my-0 flex max-w-7xl flex-col items-start justify-center align-middle font-outfit"
        >
          <h1 className="m-0 p-5 text-2xl font-bold sm:text-3xl md:text-4xl">
            Explore our menu
          </h1>
          <p className="Explore-menu-text m-0 w-full px-5 py-0 text-base text-ulColor sm:w-3/4 md:w-1/2 md:text-lg">
            Indulge in comfort food classics or try our innovative chef's
            creations. From succulent steaks to mouthwatering pastas, we have
            something for every craving.
          </p>
          <div className="Explore-menu-list item-center hide-scrollbar my-[10px] mt-8 flex cursor-pointer justify-between overflow-x-auto text-ulColor">
            <div className="flex gap-5 sm:gap-8 md:gap-10">
              {menu_list.map((item, index) => {
                return (
                  <div
                    onClick={() =>
                      setCategory((pre) =>
                        pre === item.menu_name ? "All" : item.menu_name,
                      )
                    }
                    key={index}
                    className="explore-menu-list-item w-[20vw] min-w-[80px] cursor-pointer border-none text-center transition duration-200 ease-in-out sm:w-[15vw] md:w-[10vw]"
                  >
                    <img
                      src={item.menu_image}
                      alt=""
                      className={`rounded-full border-4 p-0.5 ${
                        category === item.menu_name
                          ? "border-[tomato]"
                          : "border-transparent"
                      }`}
                    />
                    <p className="mt-[10px] font-outfit text-sm sm:text-base md:text-lg">
                      {item.menu_name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="hr mx-0 my-5 h-1 border-none bg-[#e2e2e2]"></div>
    </>
  );
};

export default ExploreMenu;
