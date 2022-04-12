import React, { useState } from "react";
import { Button, Offcanvas, Navbar, Container, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import image from "./../../assests/images/logo-symbol.png";
function Dashboard(props) {
  let navigate = useNavigate();
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props);
  return (
    <>
      <Navbar>
        <Container>
          <Button variant="primary" onClick={handleShow}>
                        Sidebar
                    </Button>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className="headerbar">
              <p className="mr-4">
                <i class="fas fa-sliders-h"></i>setting
              </p>
              <p onClick={() => navigate("/login")}>
                {" "}
                <i class="fas fa-sign-out-alt"></i>logout
              </p>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div></div>
      <Offcanvas className="sidebar" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <img src={image} />
          <Offcanvas.Title>BRAIN ED</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="imageprofile">
            <Image
              src="https://source.unsplash.com/user/c_v_r/100x100"
              roundedCircle
            ></Image>
            <h5>Miss Riya.shah</h5>
          </div>
          <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link onClick={() => navigate("/dashboardpage")}>
              <i class="fas fa-home"></i>Dashboard
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/sessions")} eventKey="link-1">
              <i class="fas fa-hourglass-start"></i>Sessions
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/reports")} eventKey="link-2">
              <i class="fas fa-broadcast-tower"></i>Live
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/reports")} eventKey="link-2">
              <i class="fas fa-chart-line"></i>Reports
            </Nav.Link>

            <Nav.Link
              onClick={() => navigate("/testreports")}
              eventKey="link-2"
            >
              <i class="fas fa-chart-pie"></i>Test Reports
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Dashboard;
