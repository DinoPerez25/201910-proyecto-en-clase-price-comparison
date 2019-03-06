import React, { Component } from "react";
import { Link } from "react-router-dom";

class Adminprofile extends Component {
  render() {
    return (
      <article className="adminprofile">
        <p className="title">Administrador</p>
        <button className="button button-primary float">
          + Crear categoría
        </button>

        <table className="table-categories">
          <tr>
            <th>Categorías</th>
            <th>Actualizar</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>

          <tr>
            <td>
              <p>Cebolla</p>
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
              <Link to="/products">
                <button className="button primary-button button-round">
                  <img
                    className="image-button"
                    src={require("../../CSS/icons/PNG/pencil.png")}
                  />
                </button>
              </Link>
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
export default Adminprofile;
