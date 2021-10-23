import React from "react";

import { Route, Switch } from "react-router-dom";
// import React, { useState } from "react";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Shop from "../pages/Shop";
import ProductDescription from "../pages/ProductDescription";
import Cart from "../pages/Cart";
// import Main from "./Components/Main";

export default function Page() {
  return (
    <div>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>

      <Route exact path="/">
        <Shop />
      </Route>

      <Route exact path="/product/:productId">
        <ProductDescription />
      </Route>

      <Route exact path="/cart">
        <Cart />
      </Route>
    </div>
  );
}
