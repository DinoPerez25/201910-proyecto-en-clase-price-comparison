import React, { Component } from "react";
import { Link } from "react-router-dom";

class Accountsettings extends Component {
  render() {
    return (
      <article className="accountsettings">
        <h2 className="title">Configuración de cuenta</h2>

        <div className="container-flex-h">
          <div>
            <form className="form">
              <div>
                <label for="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="Camilo Alejandro Perez V."
                  id="name"
                  name="name"
                  title="Name"
                />
              </div>
              <div>
                <label for="username" className="label">
                  Email
                </label>
                <input
                  type="text"
                  className="input"
                  placeholder="camilopvargar@gmail.com"
                  id="email"
                  name="email"
                  title="Email"
                />
              </div>
              <div>
                <label for="password" className="label">
                  Password
                </label>
                <input
                  type="password"
                  className="input"
                  placeholder="***********"
                  id="password"
                  name="password"
                  title="Password"
                />
              </div>
              <div>
                <label for="confirm-password" className="label">
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  className="input"
                  placeholder="***********"
                  id="confirm-password"
                  name="confirm-password"
                  title="Confirm password"
                />
              </div>
            </form>
          </div>
          <div className="profile-photo ">
            <img
              className="photo"
              src={require("../../CSS/icons/PNG/user.png")}
            />
          </div>
        </div>

        <div>
          <button type="button" className="button button-primary ">
            Actualizar
          </button>
        </div>
      </article>
    );
  }
}
export default Accountsettings;
