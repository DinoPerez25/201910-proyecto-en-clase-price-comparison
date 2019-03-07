import React, { Component } from "react";

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header container">
        <div className="container-flex-v">
          <div className="loginsButtons">
            <Link to="/signin" className="nav-link">
              Signin
            </Link>
            <a>/</a>
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </div>
          <div className="logo">
            <Link to="/" className="nav-link">
              <img
                className="logo-img"
                src={require("../../Images/logo.png")}
                alt="sacrappy-logo"
                href="/"
              />
            </Link>
          </div>

          <nav className="nav-bar">
            <Link to="/" className="nav-item">
              Catálogo
            </Link>
            <Link to="/profile" className="nav-item">
              Perfil
            </Link>
            <Link to="/cart" className="nav-item">
              Carrito
            </Link>
            <Link to="/history" className="nav-item">
              Historial
            </Link>
            <div>
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
                  <button className="button button-primary search-button">
                    <img
                      className="search-button-icon"
                      src={require("../../CSS/icons/PNG/search.png")}
                    />
                  </button>
                </div>
              </form>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
