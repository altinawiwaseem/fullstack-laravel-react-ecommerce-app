import React, { useState } from "react";
import Navbar from "../../../layouts/frontend/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Register = () => {
  const [registerError, setRegisterError] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      await axios.get("sanctum/csrf-cookie").then((response) => {
        axios
          .post("api/register", {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
          })
          .then((res) => {
            if (res.data.status === 200) {
              localStorage.setItem("auth_token", res.data.token);
              localStorage.setItem("auth_name", res.data.username);
              swal("Success", res.data.message, "success").then(navigate("/"));
            } else {
              setRegisterError(res.data.validation_errors);
            }
          });
      });
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
                    <span className="text-danger">{registerError.name}</span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" />
                    <span className="text-danger">{registerError.email}</span>
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                    />
                    <span className="text-danger">
                      {registerError.password}
                    </span>
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
