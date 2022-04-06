import React from "react";
import dashboard from '../assets/dashboard.png'
import sessions from '../assets/sessions.png'
import live from '../assets/live.png'
import report from '../assets/report.png'
import testreport from '../assets/testreport.png'

export default function SideNav({changeNav, selectedNav}) {
  const getList = (name, img, num) => (
    <>
      <div
        onClick={() => changeNav(num)}
        style={{
          display: "flex",
          backgroundColor: selectedNav === num ?  "white" : '',
          width: "100%",
          height: "50px",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: '10px'
        }}
      >
           <img src={img} style={{height: '20px', marginRight: '20px'}} />
        <div
          style={{
            fontSize: "1.2rem",
            color: "rgb(0, 196, 250)",
            fontWeight: "bold",
          }}
        >
         {name}
        </div>
      </div>
    </>
  );
  return (
    <div
      style={{
        height: "100%",
        backgroundColor: "darkblue",
        width: "25vw",
        borderRadius: "15px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontWeight: "bold",
          marginTop: "10px",
        }}
      >
            {/* <img src={checkfit} style={{height: '20px', marginRight: '20px'}} /> */}
        <div>BRAIN ED</div>
      </div>
      <div
        style={{
          height: "80px",
          width: "80px",
          borderRadius: "40px",
          marginLeft: "35%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          backgroundColor: "white",
          marginTop: "20px",
        }}
      >
        <img
          style={{ height: "50px" }}
          src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
        />
      </div>
      <div
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          marginLeft: "25%",
          color: "rgb(0, 196, 250)",
          fontWeight: "bold",
          fontSize: "1.3rem",
        }}
      >
        Miss Riya Shah
      </div>
      {getList('Dashboard', dashboard, 1)}
      {getList('Sessions', sessions, 2)}
      {getList('Live', live, 3)}
      {getList('Report', report, 4)}
      {getList('Test Report', testreport, 5)}
    </div>
  );
}
