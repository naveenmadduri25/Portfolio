import React from "react";
import "./header.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MEN from "../../images/men.png";

import ELLIPSE from "../../images/Ellipse 1.png";
import { FiDownload } from "react-icons/fi";
const header = () => {
  return (
    <div className="header">
      <Container className="container-div">
        <Row className="header-row">
          <Col className=" text-left col-lg-6 col-md-12">
            <div className="container-1">
              <div className=" header-intro">Hello, I am</div>
              <div className="header-name">CALEB NYONG</div>
              <div className="header-source">UI/UX & Product Designer</div>
              <div className="header-text">
                I’m a top online marketer and branding expert, I started my
                career by lauching the popular metaverse design, in just a few
                short years, I built the brand to millions of social media
                followers and websites visitors.
              </div>
            </div>
            <div>
              <div className="button-container">
                <button className="hireme-btn">Hire me</button>
                <button
                  className="download-btn"
                  onClick={() => {
                    "Download button cliked";
                  }}
                >
                  Download CV{" "}
                  <img
                    className="hedderdownloadbuttonpic"
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fdownloadpic.png?alt=media&token=e405044f-cf49-44c8-8f8b-72f490e5959f"
                  ></img>
                </button>
              </div>
            </div>
            <div className="card-container">
              <div className="header-card">
                <div className="card-1">
                  <div className="card-image">
                    <img src={ELLIPSE} alt="" />
                  </div>

                  <div>
                    <div className="card-name">Phanny - Nigeria</div>
                    <div className="card-date">Sat 28 May 2022</div>
                  </div>
                </div>

                <div className="card-text">
                  In just a few short years, I built the brand to millions of
                  social media followers and websites visitors.
                </div>
              </div>
            </div>
          </Col>

          <Col className=" fristpic text-center col-lg-6 col-md-12">
            <img src={MEN}></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default header;
