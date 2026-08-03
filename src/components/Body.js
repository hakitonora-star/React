import Cards from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.eatsure.com/v1/api/get_restaurants_with_details?cityId=3476"
    );

    const json = await data.json();

    console.log(json);

    setListofRestaurants(json?.data?.data);
    setFilteredRestaurants(json?.data?.data);
  };

  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="search" >
       <input
  className="search-box"
  type="text"
  value={searchText}
  placeholder="Search Restaurant"
  onChange={(e) => setSearchText(e.target.value)}
/>

<button
  className="search-btn"
  onClick={() => {
    const filtered = listofRestaurants.filter((res) =>
      res.brand_name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }}
>
  Search
</button>

<button
  className="filter-btn"
  onClick={() => {
    const filtered = listofRestaurants.filter(
      (res) => res.rating > 4
    );
    setFilteredRestaurants(filtered);
  }}
>
  Top Rated Restaurants
</button>

<button
  className="reset-btn"
  onClick={() => {
    setFilteredRestaurants(listofRestaurants);
    setSearchText("");
  }}
>
  Reset
</button>
      </div>

      <div className="body">
        {filteredRestaurants.map((restaurant) => (
          <Cards
            key={restaurant.brand_id}
            resdata={restaurant}
          />
        ))}
      </div>
    </>
  );
};

export default Body;