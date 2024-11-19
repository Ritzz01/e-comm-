import React from "react";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  // Calculate the total price of the items in the basket
  const calculateTotal = () => {
    return basket?.reduce((amount, item) => item.price * item.quantity + amount, 0).toFixed(2);
  };

  // Remove item from the basket
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  // Increment the quantity of an item in the basket
  const incrementQuantity = (id) => {
    dispatch({
      type: "INCREMENT_ITEM_QUANTITY",
      id: id,
    });
  };

  // Decrement the quantity of an item in the basket
  const decrementQuantity = (id) => {
    dispatch({
      type: "DECREMENT_ITEM_QUANTITY",
      id: id,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800">Checkout</h1>

      {/* Displaying Basket Items */}
      <div className="mt-6 space-y-4">
        {basket?.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          basket?.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                {/* Quantity Adjustments */}
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
                >
                  +
                </button>

                {/* Remove Item Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Total Amount */}
      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total:</h2>
        <p className="text-2xl font-semibold text-gray-700">${calculateTotal()}</p>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 flex justify-center">
        <Link to="/payment">
          <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg text-xl">
            Proceed to Payment
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
