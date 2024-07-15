import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

// destructuring category
const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="FoodDisplay" id="FoodDisplay">
      <h2>Top dishes near you </h2>
      <div className="food-display-list">
        {food_list.map((item, index) =>
          // to filter the dishes we select from the menu
          {
            if (category === "All" || category === item.category) {
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          }
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
