import React from "react";
// import "../Components/css/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div>
            <Link to="/">
              <h3 className="text-center mb-4">Logo</h3>
            </Link>

            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example1"
                  className="form-control"
                />
                <label className="form-label" for="form1Example1">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example2"
                  className="form-control"
                />
                <label className="form-label" for="form1Example2">
                  Password
                </label>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label className="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div className="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
