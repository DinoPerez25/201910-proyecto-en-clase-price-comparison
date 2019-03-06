import React, { Component } from "react";

import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header className="header container">
        <div className="container-flex-v">
          <div className="loginsButtons">
            <a className="link" href="#">
              Singin
            </a>
            <a>/</a>
            <a className="link" href="#">
              Singup
            </a>
          </div>
          <div className="logo">
            <img
              className="logo-img"
              src={require("../../Images/logo.png")}
              alt="sacrappy-logo"
              href="/"
            />
          </div>

          <nav aria-labelledby="mainmenulabel">
            <ul className="nav-bar" role="menu">
              <li className="nav-item" role="menuitem">
                Home
              </li>
              <li className="nav-item" role="menuitem">
                Categorías
              </li>
              <li className="nav-item" role="menuitem">
                Carrito
              </li>
              <li className="nav-item" role="menuitem">
                Listas
              </li>
              <li className="nav-item" role="menuitem">
                Perfil
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
