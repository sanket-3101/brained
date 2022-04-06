import React, { useEffect } from 'react';
import logo from './../../abc.jpeg';
import './../../App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();

   useEffect(() => {
     setTimeout(() => {navigate("/login");}, 5000);
  }, []);
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
       
      
  
    </div>
  );
}

export default App;
