import React from "react";
import { Container, NavDropdown } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const navigate =useNavigate()
  const emailToFind = localStorage.getItem('user');
  const userName =  emailToFind?.split('@')[0];
  const isLoggedIn = localStorage.getItem("login");
  const handleLogout = () => {
    localStorage.removeItem("login");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">School App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {isLoggedIn && (
                <>
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                  <div
                    className=" mt-1 rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                    style={{
                      width: "30px",
                      height: "30px",
                      fontSize: "15px",
                      fontWeight: "bold",
                    }}
                  >
                    {userName.split(" ")[0][0]}
                    {userName.split(" ")[1] ? userName.split(" ")[1][0] : ""}
                  </div>
                  <NavDropdown title={userName} id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
              {!isLoggedIn && (
                <>
                  <NavLink className="nav-link" to="/">
                    Login
                  </NavLink>

                  <NavLink className="nav-link" to="/register">
                    Registration
                  </NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};


export default NavbarComponent;
