import React from "react";
import Header from "./Header";
import Checkout from "./Checkout";

function Cart() {
  return (
    <div>
      <Header />

      <div className="mt-4  flex justify-center">
        <div className=" text-center w-4/6">
          <h1 className="font-bold">Your Shopping basket is Here</h1>
          <hr />
          <div className="p-5">
          <Checkout/>

          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Cart;
