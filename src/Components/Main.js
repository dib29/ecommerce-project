import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Shop from "../pages/Shop";

import Cart from "../pages/Cart";
export default function Main() {
  return (
    <div>
      <Switch>

        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
      </Switch>
    </div>
  );
}
