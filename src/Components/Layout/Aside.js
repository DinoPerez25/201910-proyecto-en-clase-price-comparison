import React, { Component } from "react";
class Aside extends Component {
  render() {
    return (
      <section className="left-aside">
        <div>
          <a className="head-categories">Categorías</a>
          <ul>
            <a className="section-categories">Verduras</a>
            <li>
              <a>Apio</a>
            </li>
            <li>
              <a>Cebolla</a>
            </li>
            <a className="section-categories">Frutas</a>
            <li>
              <a>Fresa</a>
            </li>
            <li>
              <a>Maracuya</a>
            </li>
            <li>
              <a>Limon</a>
            </li>
            <a className="section-categories">Carne</a>
            <li>
              <a>Res</a>
            </li>
            <li>
              <a>Cerdo</a>
            </li>
            <li>
              <a>Pollo</a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
export default Aside;
