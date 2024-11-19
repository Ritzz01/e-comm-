import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";

function Item() {
  const [data, setData] = useState([]);
  const [{ basket }, dispatch] = useStateValue();

  const url = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        let data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const addToBasket = (item) => {
    // Always dispatch the item to the basket (no check for existing items)
   console.log(item);
   
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
      },
    });
  };
  
  
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((item) => (
        <div
          key={item.id} // Use item.id as the key to ensure each item is uniquely identified
          className="border-2 border-gray-200 rounded-lg p-6 text-center shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          <ul className="mt-4">
            <li className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              {item.title}
            </li>
            <li className="p-2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full sm:w-3/4 md:w-2/3 lg:w-3/4 mx-auto mb-4"
              />
            </li>
            <li className="text-lg sm:text-2xl md:text-3xl font-bold text-yellow-500">
              ${item.price}
            </li>
          </ul>

          <button
            onClick={() => addToBasket(item)} // Pass the specific item to add to basket
            className="mt-4 bg-yellow-500 text-white p-4 text-xl font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300"
          >
            Add To Basket
          </button>
        </div>
      ))}
    </div>
  );
}

export default Item;
