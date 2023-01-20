import React from "react";
import "./contact.css";
import Form from "react-bootstrap/Form";
import { Col, Container, FormControl, Row } from "react-bootstrap";

import { IoIosMailUnread } from "react-icons/io";
import { FaRegAddressCard } from "react-icons/fa";
import { BsPhone } from "react-icons/bs";
const contact = () => {
  return (
    <div className="contact-body" id="contact">
      <Container>
        <Row>
          <Col className="col-lg-6 col-xs-12">
            <div className="contactus">Contact us</div>
            <div className="contactus-text">
              {" "}
              We are committed to processing the information in order to contact
              you and talk about your project.
            </div>
            <div className="contact1">
              <div className="mail-icon">
                <IoIosMailUnread />
              </div>
              <div className="mailid"> example@teamwebflow.com</div>
            </div>

            <div className="contact2">
              <div className="address-icon">
                <FaRegAddressCard />
              </div>
              <div className="address">
                4040 Lekki Summit Suite 402 Lake Manchester City{" "}
              </div>
            </div>
            <div className="contact3">
              <div className="phone-icon">
                <BsPhone />
              </div>
              <div className="phone">+44 123 777 5401</div>
            </div>
          </Col>
          <Col className="col-lg-6 col-xs-12">
            <div className="container-form">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control placeholder="Name*" type="text" id="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <FormControl placeholder="Email*" type="Email" id="mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="forBasicPassword">
                  <Form.Control placeholder="Website*" type="text" id="web" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control placeholder="Message" type="text" id="msg" />
                </Form.Group>
                <div className="formbutton-container">
                  <button
                    className="form-button"
                    onClick={() => {
                      console.log("Submit Clicked");
                    }}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="footer">
          <Col className="logo-content col-lg-3 col-xs-12">
            <img
              className="logo"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Flastlogo.png?alt=media&token=b05878fc-989c-4fd7-9ee4-c82068634804"
            />
            <div className="logo-text">
              {" "}
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum{" "}
            </div>
          </Col>
          <Col className="links1 col-lg-3 col-xs-12 text-align-center">
            <div className="uscol1">
              <a className="A1" href="#Explore">
                {" "}
                EXPLORE
              </a>
              <a className="A2" href="#Supports">
                SUPPORTS
              </a>
              <a className="A3" href="#About_Us">
                ABOUT US
              </a>
              <a className="A4" href="#Blog">
                BLOG
              </a>
            </div>
          </Col>

          <Col className=" links1 col-lg-3  col-xs-12">
            <div className="uscol2">
              <a className="A5" href="#Legal">
                LEGAL
              </a>
              <a className="A6" href="#Terms_Of_Use">
                TERMS OF USE
              </a>
              <a className="A7" href="#Privacy_Policy">
                PRIVACY POLICY
              </a>
            </div>
          </Col>

          <Col className=" uslinksmacs1 col-lg-3  col-xs-12">
            <div className="uscol3">
              <a className="A8" href="#Socials">
                SOCIALS
              </a>
              <a className="A9" href="#Twitter">
                TWITTER
              </a>
              <a className="A10" href="#Linkedin">
                LINKEDIN
              </a>
              <a className="A11" href="#Instagram">
                INSTAGRAM
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="uslinksrow">
          <Col className=" col-sm-4">
            <div className="mobilelinks">
              <a className="A1" href="#">
                EXPLORE
              </a>
              <a className="A2" href="#">
                SUPPORTS
              </a>
              <a className="A3" href="#">
                ABOUT US
              </a>
              <a className="A4" href="#">
                BLOG
              </a>
            </div>
          </Col>
          <Col className=" col-sm-4">
            <div className="mobilelinks">
              <a className="A5" href="#">
                LEGAL
              </a>
              <a className="A6" href="#">
                TERMS OF USE
              </a>
              <a className="A7" href="#">
                PRIVACY POLICY
              </a>
            </div>
          </Col>
          <Col className="col-sm-4">
            <div className="mobilelinks">
              <a className="A8" href="#">
                SOCIALS
              </a>
              <a className="A9" href="#">
                TWITTER
              </a>
              <a className="A10" href="#">
                LINKEDIN
              </a>
              <a className="A11" href="#">
                INSTAGRAM
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="foot"></div>
    </div>
  );
};

export default contact;
