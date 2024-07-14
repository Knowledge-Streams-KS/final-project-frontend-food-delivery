import React, { useContext } from "react";
import { StoreContext } from "../../context/storeContext";
import FoodItems from "../FoodItems/FoodItems";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <>
      <div className="food-Display mt-[30px] font-outfit">
        <h2 className="text-2xl font-bold">Top Dishes near you</h2>
        <div className="display-list-items mt-[30px] grid items-center justify-center gap-[30px] gap-x-10 [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]">
          {food_list.map((item, index) => {
            if ((category === "All" || category === item.category)) {
              return (
                <FoodItems
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default FoodDisplay;
