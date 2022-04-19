import React, { useEffect, useContext } from "react";
import logo from "./../../assests/images/splash-bg.png";
import "./../../App.css";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../../context/socket";

function App() {
  let navigate = useNavigate();
  const socket = useContext(SocketContext);
  useEffect(() => {
    socket.on("connect", () => {
      console.log('socket ===>', socket.id); // "G5p5..."
    });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  }, []);
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
