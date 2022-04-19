import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Header(props) {
    let navigate = useNavigate();

    return(
        <Navbar style={{boxShadow: 'none'}} fixed="left">
        <Container> 
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <div className="headerbar">
              <p className="mr-4">
                <i class="fas fa-sliders-h"></i>setting
              </p>
              <p onClick={() =>  navigate("/login")}>
                {" "}
                <i class="fas fa-sign-out-alt"></i>logout
              </p>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Header