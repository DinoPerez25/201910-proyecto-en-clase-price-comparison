import React, { Component } from "react";
import { Link } from "react-router-dom";
class Signup extends Component {
  render() {
    return (
      <article className="signup ">
        <form className="form">
          <h2 className="title">Sign Up</h2>
          <div>
            <label for="name" className="label">
              Name
            </label>
            <input
              type="text"
              className="input"
              placeholder="Name"
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
              placeholder="Email"
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
              placeholder="Password"
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
              placeholder="Password"
              id="confirm-password"
              name="confirm-password"
              title="Confirm password"
            />
          </div>
          <div>
            <button type="button" className="button button-primary ">
              Sign Up
            </button>
          </div>
          <div>
            <a>
              ¿Ya tienes cuenta? <Link to="/signin">Ingresar</Link>
            </a>
          </div>
        </form>
      </article>
    );
  }
}
export default Signup;
