import React, { Component } from "react";
import { Link } from "react-router-dom";

class Signin extends Component {
  render() {
    return (
      <article className="signin">
        <form className="form">
          <h2 className="title">Sign In</h2>
          <div>
            <label for="username" className="label">
              Username
            </label>
            <input
              type="text"
              className="input"
              placeholder="Username"
              id="username"
              name="username"
              title="Username"
            />
          </div>
          <div>
            <label for="password" className="label">
              Password
            </label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              id="password"
              name="password"
              title="Password"
            />
          </div>
          <div>
            <button className="button button-primary button-large">
              Sign In
            </button>
          </div>
          <div>
            <a>
              ¿Aun no tienes cuenta? <Link to="/signup">Registrate</Link>
            </a>
          </div>
        </form>
      </article>
    );
  }
}
export default Signin;
