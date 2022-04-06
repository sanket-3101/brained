import React from "react";

function Login() {
  return (
    <section class="vh-100" style={{ backgroundColor: "rgb(0,48,90)" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
              <div class="card-body p-5 text-center">
                <h2 class="mb-5">
                  Let's <span>learn</span>
                </h2>

                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="typeEmailX-2"
                    class="form-control form-control-lg"
                    placeholder="Enter Username"
                  />
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    class="form-control form-control-lg"
                    placeholder="Enter Password"
                  />
                </div>

                <button
                  style={{
                    width: "100%",
                    height: "50px",
                    backgroundColor: "rgb(0,48,90)",
                    border: 0,
                    borderRadius: "10px",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: '1.3rem'
                  }}
                  type="submit"
                >
                  Login
                </button>

                <hr class="my-4"></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
