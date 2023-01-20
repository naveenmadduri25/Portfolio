import React from "react";
import "./portfolio.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FRAME from "../../images/frame 16.png";
import FRAMECHAIR from "../../images/frame 17.png";
import FRAMENEFT from "../../images/Frame 12.png";
import FRAMECAR from "../../images/frame 19.png";
const portfolio = () => {
  return (
    <div className="portfolio-body">
      <div className="portfolio-title">PORTFOLIO</div>
      <div className=" portfolio-header"> People Lie Work Don’t</div>
      <a className="explore-all" href="#Explore_All_Services">
        Explore All Services
      </a>

      <Container className="portfolio-container">
        <Row className=" part-1 pb-4">
          <Col className=" img1-1 col-lg-6 col-xs-6 ">
            <img src={FRAME} alt="frame image for realestate" />
          </Col>

          <Col className=" img1-2 col-lg-6  col-xs-12 ">
            <img src={FRAMECHAIR} alt="frame image for chair" />
          </Col>
        </Row>
        <Row className="part-2">
          <Col className=" img2-1 col-lg-6 col-xs-12 ">
            <img src={FRAMENEFT} alt="frame image for neft process" />
          </Col>
          <Col className=" img2-2 col-lg-6 col-xs-12 ">
            <img src={FRAMECAR} alt="frame image for car" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default portfolio;
