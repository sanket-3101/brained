// import React, { useState } from "react";
// import { Button, Offcanvas, Navbar, Container, Nav } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
// import { useNavigate } from "react-router-dom";
// import image from "./../../assests/images/logo-symbol.png";
//   let navigate = useNavigate();
//   const [show, setShow] = useState(true);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const handleNavigation = (navigateTo) => {
//     navigate(navigateTo);
//     handleClose();
//   };
//   return (
//     <>
//       <Navbar fixed="left">
//         <Container>
//           <Button variant="primary" onClick={handleShow}>
//             Sidebar
//           </Button>
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-end">
//             <div className="headerbar">
//               <p className="mr-4">
//                 <i class="fas fa-sliders-h"></i>setting
//               </p>
//               <p onClick={() => handleNavigation("/login")}>
//                 {" "}
//                 <i class="fas fa-sign-out-alt"></i>logout
//               </p>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//       <div></div>
//       <Offcanvas className="sidebar" show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <img src={image} />
//           <Offcanvas.Title>BRAIN ED</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <div className="imageprofile">
//             <Image
//               src="https://source.unsplash.com/user/c_v_r/100x100"
//               roundedCircle
//             ></Image>
//             <h5>Miss Riya.shah</h5>
//           </div>
//           <Nav defaultActiveKey="/home" className="flex-column">
//             <Nav.Link onClick={() => handleNavigation("/dashboardpage")}>
//               <i class="fas fa-home"></i>Dashboard
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => handleNavigation("/sessions")}
//               eventKey="link-1"
//             >
//               <i class="fas fa-hourglass-start"></i>Sessions
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => handleNavigation("/live")}
//               eventKey="link-2"
//             >
//               <i class="fas fa-broadcast-tower"></i>Live
//             </Nav.Link>
//             <Nav.Link
//               onClick={() => handleNavigation("/reports")}
//               eventKey="link-2"
//             >
//               <i class="fas fa-chart-line"></i>Reports
//             </Nav.Link>

//             <Nav.Link
//               onClick={() => handleNavigation("/testreports")}
//               eventKey="link-2"
//             >
//               <i class="fas fa-chart-pie"></i>Test Reports
//             </Nav.Link>
//           </Nav>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }
// export default Dashboard;
import { Button } from "bootstrap";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
// import dashboard from '../assets/dashboard.png'
// import sessions from '../assets/sessions.png'
// import live from '../assets/live.png'
// import report from '../assets/report.png'
// import testreport from '../assets/testreport.png'

export default function Dashboard(props) {
  const { pathname } = useLocation();
  let navigate = useNavigate();
  const handleNavigation = (navigateTo) => {
    navigate(navigateTo);
  };
  const getList = (name, img, num, routes, image) => (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: pathname === routes ? "white" : "",
          width: "100%",
          height: "50px",
          // justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
          paddingLeft: "20%",
        }}
        onClick={() => handleNavigation(routes)}
      >
        <i class={image}></i>
        <div
          style={{
            fontSize: "1.2rem",
            color: "rgb(0, 196, 250)",
            fontWeight: "bold",
            marginLeft: "10px",
          }}
        >
          {name}
        </div>
      </div>
    </>
  );

  return (
    <>
      <div
        style={{
          height: "100%",
          backgroundColor: "#0E3458",
          width: "18vw",
          borderRadius: "15px",
          alignItems: "center",
          overflow: "scroll",
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
          <div>Shyam Parmar</div>
        </div>
        <div
          style={{
            height: "90px",
            width: "90px",
            borderRadius: "45px",
            marginLeft: "35%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            backgroundColor: "white",
            marginTop: "20px",
          }}
        >
          <img
            style={{ height: "60px" }}
            // src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
            src={require("../../../src/assests/images/profile.jpeg")}
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
          Mr Shyam Parmar
        </div>
        {getList("Dashboard", "", 1, "/dashboardpage", "fas fa-home")}
        {getList("Sessions", "", 2, "/sessions", "fas fa-hourglass-start")}
        {getList("Live", "", 3, "/live", "fas fa-broadcast-tower")}
        {getList("Report", "", 4, "/report", "fas fa-chart-line")}
        {getList(
          "Details Analysis",
          "",
          5,
          "/daily-report",
          "fas fa-chart-line"
        )}
        {getList("Subjects", "", 10, "/subject", "fas fa-chart-pie")}
        {getList("Chapters", "", 9, "/chapter", "fas fa-chart-pie")}

        {/* {getList("Over All", "", 6, "/overall", "fas fa-chart-pie")}
        {getList("Quiz", "", 7, "/quiz", "fas fa-chart-pie")}
        {getList("Blink Rate", "", 8, "/blink", "fas fa-chart-pie")} */}
      </div>
    </>
  );
}
