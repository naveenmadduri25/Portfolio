import React from "react";
import "./caseStudy.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FRAME11 from "../../images/Frame 11.png";
import FRAME15 from "../../images/Frame 15.png";
import FRAME13 from "../../images/Frame 13.png";

const caseStudy = () => {
  return (
    <div className="casestudy-body">
      <div className="case-info">CASE STUDY</div>
      <div className="case-title">My Case Studies</div>
      <Container>
        <Row className="case-row1">
          <Col className="col-lg-6 col-md-8 col-sm-9">
            <img
              className="img1"
              src={FRAME11}
              alt=" Bakery Landing Page Design picture"
            />
          </Col>

          <Col className=" c1 col-lg-6 col-md-8 col-sm-9">
            <div className="case-number1">01</div>
            <div className="case-heading1"> Bakery Landing Page Design</div>
            <div className="case-content1">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </div>
            <div className="case-button-container">
              <button
                className="case-content-button"
                onClick={() => {
                  "Details button cliked";
                }}
              >
                Details
              </button>
            </div>
          </Col>
        </Row>
        <Row className="case-row2">
          <Col className="col-lg-6 col-md-8 col-sm-9">
            <div className="case-number2">02</div>
            <div className="case-heading2">
              Shoe Store Ecommerce Landing Page
            </div>
            <div className="case-content2">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </div>
            <div className="case-button-container">
              <button
                className="case-content-button"
                onClick={() => {
                  "Deatils button cliked";
                }}
              >
                Details
              </button>
            </div>
          </Col>

          <Col className="col-lg-6 col-md-8 col-sm-9">
            <img
              className="img2"
              src={FRAME13}
              alt="Shoe Store Ecommerce Landing Page picture"
            />
          </Col>
        </Row>
        <Row className="case-row3">
          <Col className="col-lg-6 col-md-8 col-sm-9">
            <img
              className="img3"
              src={FRAME15}
              alt="Bakery Landing Page Design picture"
            />
          </Col>
          <Col className="col-lg-6 col-md-8 col-sm-9">
            <div className="case-number3">03</div>
            <div className="case-heading3">ClearMix Landing page</div>
            <div className="case-content3">
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </div>
            <div className="case-button-container">
              <button
                className="case-content-button"
                onClick={() => {
                  "Download button cliked";
                }}
              >
                Details
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default caseStudy;
