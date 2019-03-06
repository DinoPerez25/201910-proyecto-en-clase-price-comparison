import React, { Component } from "react";
import { Link } from "react-router-dom";

class Products extends Component {
  render() {
    return (
      <article className="adminprofile">
        <p className="title">Categoría: Frutas</p>

        <button className="button button-primary float">
          + Crear nuevo producto
        </button>

        <table className="table-categories">
          <tr>
            <th>Frutas</th>
            <th>Actualizar</th>
            <th>Eliminar</th>
          </tr>

          <tr>
            <td>
              <p>Fresa</p>
              <p>Última actualización: 25 febrero del 2019</p>
            </td>
            <td>
              <button className="button primary-button button-round">
                <img
                  className="image-button"
                  src={require("../../CSS/icons/PNG/loop2.png")}
                />
              </button>
            </td>
            <td>
              <button className="button primary-button button-round">
                <img
                  className="image-button"
                  src={require("../../CSS/icons/PNG/minus.png")}
                />
              </button>
            </td>
          </tr>
        </table>
        <div className="loginsButtons">
          <a className="link " href="#">
            <Link to="/profile" className="nav-link">
              Usuario
            </Link>
          </a>
        </div>
      </article>
    );
  }
}
export default Products;
