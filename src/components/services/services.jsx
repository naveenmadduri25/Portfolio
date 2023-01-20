import React from "react";
import "./services.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FRAME from "../../images/Frame 8.png";
import FRAME1 from "../../images/Frame 9.png";
import FRAME2 from "../../images/Frame 10.png";
const services = () => {
  return (
    <div className="services-body" id="services">
      <div className="s-info">SERVICES</div>
      <div className="s-title">Check My Services</div>
      <div className="s-explore">Explore All Services</div>
      <div className="services-body">
        <Container>
          <Row>
            <Col className="spic1 col-lg-4 col-mg-8 col-sm-12">
              <img src={FRAME} alt="services frame picture" />
              <div className="services-heading"> Landing page design</div>
              <div className="services-content">
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </div>
            </Col>
            <Col className="spic2 col-lg-4 col-md-8 col-sm-12">
              <img src={FRAME1} alt="services frame picture2" />
              <div className="services-heading">Mobile App Design</div>
              <div className="services-content">
                {" "}
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </div>
            </Col>

            <Col className="spic3 col-lg-4 col-md-8 col-sm-12">
              <img src={FRAME2} alt="services frame picture3" />
              <div className="services-heading">Branding</div>
              <div className="services-content">
                {" "}
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default services;
