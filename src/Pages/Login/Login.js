import axios from "axios";
import React, { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constant";
import "./login.css";

function Login(props) {
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  let navigate = useNavigate();
  const { state } = useLocation();

  console.log("State ==>", state);

  useEffect(() => {
    if (state) {
      setFname(state.first_name);
      setLname(state.last_name);
    }
  }, [state]);
  const handleClick = () => {
    if (first_name != "" && last_name != "") {
      axios({
        url: state ? `${BASE_URL}profile/${state.id}` : `${BASE_URL}profile`,
        method: state ? "PUT" : "POST",
        data: {
          first_name,
          last_name,
        },
      })
        .then((res) => {
          NotificationManager.success(
            state
              ? "Profile Edited Successfully!"
              : "Profile Added Successfully!"
          );
          setFname("");
          setLname("");
        })
        .catch((err) => NotificationManager.success("Failed to Added!"));
    }
  };
  return (
    <section class="vh-100 mainarea">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div class="card-body p-5 text-center">
                <h1 class="mb-3">{state ? "EDIT USER" : "ADD USER"}</h1>

                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg text-center"
                    placeholder="Enter First Name"
                    value={first_name}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>

                <div class="form-outline mb-4 ">
                  <input
                    type="text"
                    id="typePasswordX-2"
                    className="form-control form-control-lg text-center"
                    placeholder="Enter Last Name"
                    value={last_name}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
                <button
                  class="btn btn-primary btn-lg btn-block"
                  type="submit"
                  onClick={handleClick}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
