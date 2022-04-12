import React from "react";
import { useNavigate } from 'react-router-dom';
import  './login.css'

function Login(props) {
  let navigate = useNavigate();

  const  handleClick=() =>{
    navigate("/dashboardpage ")
    }
  return (
  <section class="vh-100 mainarea">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style= {{borderRadius:'1rem'}}>
          <div class="card-body p-5 text-center">

            <h1 class="mb-3">Let's <span className=" H1Border">learn</span></h1>

            <div class="form-outline mb-4">
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg text-center" placeholder="Enter Username" />
            </div>

            <div class="form-outline mb-4 ">
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg text-center" placeholder="Enter Password"/>
            </div>
            <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={handleClick}>Login</button>        
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Login;
