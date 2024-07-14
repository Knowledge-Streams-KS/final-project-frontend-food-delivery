import React, { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/storeContext";

const FoodItems = ({ id, name, description, price, image }) => {
  const { cartItem, addToCart, removeToCart } = useContext(StoreContext);

  return (
    <>
      <div className="food-item animate-fadeIn m-auto w-[100%] rounded-md p-2 shadow-md transition duration-300">
        <div className="food-item-image-container relative">
          <img src={image} alt="" className="food-item-image" />
          {!cartItem[id] ? (
            <img
              src={assets.add_icon_white}
              className="count absolute bottom-[10px] right-[15px] w-[35px] cursor-pointer"
              onClick={() => addToCart(id)}
              alt=""
            />
          ) : (
            <div className="food-item-counter absolute bottom-[10px] right-[15px] flex items-center gap-5 rounded-full bg-white p-2">
              <img
                src={assets.remove_icon_red}
                onClick={() => removeToCart(id)}
                alt=""
              />
              <p>{cartItem[id]}</p>
              <img
                src={assets.add_icon_green}
                onClick={() => addToCart(id)}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="food-item-info p-3">
          <div className="food-item-rating mb-5 flex items-center justify-between text-[20px] font-bold">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-description text-[#676767]">{description}</p>
          <p className="food-item-price text-xl font-semibold text-tomato">
            ${price}
          </p>
        </div>
      </div>
    </>
  );
};

export default FoodItems;
