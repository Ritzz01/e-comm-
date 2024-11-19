import React from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomePage from "./components/HomePage";
import Cart from "./components/Cart";
import Payment from "./components/Payment";

function App() {
  return (
    <BrowserRouter>
    
     <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/payment" element={<Payment/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
