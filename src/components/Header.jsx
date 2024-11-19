import React from "react";
import FlutterDashIcon from "@mui/icons-material/FlutterDash";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
    const[{basket},dispatch]=useStateValue()

    const calculateTotalItems = () => {
        return basket?.reduce((total, item) => total + item.quantity, 0);
      };

  return (
    <div className="bg-black text-white h-36 ">
      <div className="p-8 flex justify-between space-x-6">
        <Link to="/home">
          <FlutterDashIcon style={{ color: "white", fontSize: "75px" }} />
        </Link>

        <h1 className="text-6xl font-bold p-4 ">BookWorm</h1>
        <div className="p-4 flex justify-between space-x-10">
          <Link to="/signUp">
            <h1 className="text-3xl font-bold text-white">
              SignUp
            </h1>
          </Link>

          <Link to="/cart" className="flex gap-2">
          <ShoppingBasketIcon style={{ color: "white", fontSize: "40px" }} />
            <h1 className="text-3xl font-bold text-white ">{calculateTotalItems()}</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
