import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profile extends Component {
  render() {
    return (
      <article className="profile">
        <div>
          <h2 className="title">Camilo Alejandro Perez V.</h2>
        </div>
        <div className="container-flex-h">
          <div className="container-flex-v">
            <div className="info-profile">
              <label for="name" className="label">
                E-mail:
              </label>
              <label for="name" className="label">
                camilopvargas@gmail.com
              </label>
            </div>
            <div className="info-profile">
              <label for="name" className="label">
                Dirección:
              </label>
              <label for="name" className="label">
                Carrera 27 # 75B - 27
              </label>
            </div>
            <div className="info-profile">
              <label for="name" className="label">
                Contraseña:
              </label>
              <label for="name" className="label">
                ****************
              </label>
            </div>
          </div>
          <div className="profile-photo ">
            <img
              className="photo"
              src={require("../../CSS/icons/PNG/user.png")}
            />
          </div>
        </div>
        <div>
          <Link to="/accountsettings">
            <button className="button button-primary">Configuración</button>
          </Link>
          <Link to="/history">
            <button className="button button-primary">Historial</button>
          </Link>
        </div>
        <div className="loginsButtons">
          <a className="link " href="#">
            <Link to="/adminprofile" className="nav-link">
              Administrador
            </Link>
          </a>
          <a>/</a>
          <a className="link " href="#">
            <Link to="/recoverypass" className="nav-link">
              Recuperacion de contraseña
            </Link>
          </a>
        </div>
      </article>
    );
  }
}
export default Profile;
