import React from "react";
import "./navbar.css";
import Caleb from "../../images/Caleb.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const navbar = () => {
  return (
    <Container>
      <div className="nav-body">
        <div className="nav-logo">
          <img src={Caleb} alt="logo-pic" />
        </div>

        <div className="navbar">
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand href="#home"> </Navbar.Brand>
              <div className="menu">
                <Navbar.Toggle aria-controls="navbar-nav" />
              </div>
              <Navbar.Collapse id="navbar-nav">
                <Nav className="me-auto ms-auto ">
                  <div className="about">
                    <Nav.Link href="#about"> ABOUT ME</Nav.Link>
                  </div>
                  <div className="services">
                    <Nav.Link href="#services">SERVICES</Nav.Link>
                  </div>
                  <div className="portfolio">
                    <Nav.Link href="#portfolio"> PORTFOLIO</Nav.Link>
                  </div>
                  <div className="testimonials">
                    <Nav.Link href="#testimonials"> TESTIMONIALS</Nav.Link>
                  </div>

                  <div className="contact">
                    <Nav.Link className="contact" href="#contact">
                      CONTACT ME
                    </Nav.Link>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="nav-logo-right">
          <img src={Caleb} alt="logo-img" />
        </div>
        <div className="navbutton-Container">
          <div className="nav-button-container">
            <button
              className="Button"
              onClick={() => {
                console.log("Hire_me button clicked");
              }}
            >
              Hire me
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default navbar;
