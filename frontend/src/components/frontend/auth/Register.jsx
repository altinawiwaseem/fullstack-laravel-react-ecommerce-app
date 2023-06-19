import React from "react";
import Navbar from "../../../layouts/frontend/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_BASE_BACKEND_URL;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      await axios
        .post(baseUrl + "/api/register", {
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
        })

        .then(navigate("/"));
    } catch (error) {
      console.log(error);
    }
  };
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
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label>Full Name</label>
                    <input type="text" className="form-control" name="name" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" />
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
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
