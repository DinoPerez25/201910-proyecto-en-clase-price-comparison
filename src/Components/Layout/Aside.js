import React, { Component } from "react";
class Aside extends Component {
  render() {
    return (
      <section className="left-aside">
        <ul>
          <li>
            <a>Verduras</a>
          </li>
          <li>
            <a>Frutas</a>
          </li>
          <li>
            <a>Carnes</a>
          </li>
          <li>
            <a>Bebidas</a>
          </li>
        </ul>
      </section>
    );
  }
}
export default Aside;
