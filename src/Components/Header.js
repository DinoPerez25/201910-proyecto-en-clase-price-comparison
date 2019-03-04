import React, { Component } from "react";

import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <nav aria-labelledby="mainmenulabel" role="menubar">
            <ul className="nav-bar" role="menu">
              <li className="nav-item" role="menuitem">
                <Link to="/" className="nav-link">
                  <span className="icon-home" /> Home
                </Link>
              </li>
              <li className="nav-item" role="menuitem">
                <Link to="/signin" className="nav-link">
                  Sign In
                </Link>
              </li>
              <li className="nav-item" role="menuitem">
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>

          <form className="form search-form">
            <div>
              <label for="search">
                <input
                  type="button"
                  className="input input-rounded"
                  type="text"
                  id="search"
                  name="search"
                  title="Search"
                />
              </label>
            </div>
            <div>
              <img className="" src="" alt="user-icon" />
            </div>
            <div>
              <button className="button button-primary">Scrappy</button>
            </div>
          </form>
        </div>
      </header>
    );
  }
}
export default Header;
