import RestaurantCard from "./RestaurantCard.jsx";
import { resList } from "../utils/dummy.js";
import { useState } from "react";

const Body = () => {
  const [filterRestaurants, setFilterRestaurants] = useState(resList);

  return (
    <div className="body-container">
      <div className="top-res">
        <button
          className="top-btn"
          onClick={() => {
            const filterRes = resList.filter((res) => res.info.avgRating > 4.5);
            setFilterRestaurants(filterRes);
            
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="search">
        <input
          className="search-input"
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
        />
        <button className="search-btn">Search</button>
      </div>

      <div className="restaurant-container">
        {/* restaurant card */}

        {filterRestaurants.map((restaurant) => (

          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
