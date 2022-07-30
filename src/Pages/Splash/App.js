import React, { useEffect, useContext } from "react";
import logo from "./../../assests/images/splash-bg.png";
import "./../../App.css";
import { useNavigate } from "react-router-dom";


function App() {
  let navigate = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      navigate("/user");
    }, 5000);
  }, []);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
