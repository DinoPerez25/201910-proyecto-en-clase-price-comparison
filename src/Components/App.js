import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Container from "./Layout/Container";
import Signin from "./Content/Signin";
import Signup from "./Content/Signup";
import Cart from "./Content/Cart";
import List from "./Content/Contact";
import Profile from "./Content/Profile";
import Adminprofile from "./Content/Adminprofile";
import History from "./Content/History";
import Products from "./Content/Products";
import Recoverypass from "./Content/Recoverypass";
import Accountsettings from "./Content/Accountsettings";
import Contact from "./Content/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Header />
          <Route exact path="/" component={Container} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/cart" component={Cart} />
          <Route path="/list" component={List} />
          <Route path="/profile" component={Profile} />
          <Route path="/adminprofile" component={Adminprofile} />
          <Route path="/history" component={History} />
          <Route path="/products" component={Products} />
          <Route path="/recoverypass" component={Recoverypass} />
          <Route path="/accountsettings" component={Accountsettings} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </main>
      </BrowserRouter>
    );
  }
}
export default App;
