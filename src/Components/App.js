import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Layout/Header";
import Container from "./Layout/Container";
import Signin from "./Content/Signin";
import Signup from "./Content/Signup";
import Categories from "./Content/Categories";
import Cart from "./Content/Cart";
import List from "./Content/List";
import Profile from "./Content/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Route exact path="/" component={Container} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/categories" component={Categories} />
          <Route path="/cart" component={Cart} />
          <Route path="/list" component={List} />
          <Route path="/profile" component={Profile} />
        </main>
      </BrowserRouter>
    );
  }
}
export default App;
