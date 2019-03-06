import React, { Component } from "react";

import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header className="header container">
        <div className="container-flex-v">
          <div className="loginsButtons">
            <a className="link" href="#">
              <Link to="/signin" className="nav-link">
                Signin
              </Link>
            </a>
            <a>/</a>
            <a className="link" href="#">
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </a>
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

          <nav aria-labelledby="mainmenulabel">
            <ul className="nav-bar" role="menu">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item" role="menuitem">
                <Link to="/categories">Categorías</Link>
              </li>
              <li className="nav-item" role="menuitem">
                <Link to="/cart">Carrito</Link>
              </li>
              <li className="nav-item" role="menuitem">
                <Link to="/list">Listas</Link>
              </li>
              <li className="nav-item" role="menuitem">
                <Link to="/profile">Perfil</Link>
              </li>
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
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
