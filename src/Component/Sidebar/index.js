// import React, { useState } from "react";
// import { Button, Offcanvas, Navbar, Container, Nav } from "react-bootstrap";
// import Image from "react-bootstrap/Image";
// import { useNavigate } from "react-router-dom";
// import image from "./../../assests/images/logo-symbol.png";
// function Dashboard(props) {
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
import React from "react";
// import dashboard from '../assets/dashboard.png'
// import sessions from '../assets/sessions.png'
// import live from '../assets/live.png'
// import report from '../assets/report.png'
// import testreport from '../assets/testreport.png'

export default function  Dashboard({changeNav, selectedNav}) {
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
      {getList('Dashboard', '', 1)}
      {getList('Sessions', '', 2)}
      {getList('Live', '', 3)}
      {getList('Report', '', 4)}
      {getList('Test Report', '', 5)}
    </div>
  );
}