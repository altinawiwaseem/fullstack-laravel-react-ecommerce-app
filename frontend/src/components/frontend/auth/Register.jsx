import React from "react";
import Navbar from "../../../layouts/frontend/Navbar";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h4>Register</h4>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group mb-3">
                    <label>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={""}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={""}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                      value={""}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Confirm Password</label>
                    <input
                      type="text"
                      className="form-control"
                      name="confirmPassword"
                      value={""}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
