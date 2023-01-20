import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MEN from "../../images/men-standing.png";

import "./about.css";

const about = () => {
  return (
    <div className="about-body" id="aboutme">
      <Container>
        <Row className="about-row">
          <Col className="text-center col-lg-6 col-md-12">
            <img src={MEN} alt="profile-picture2" />
          </Col>
          <Col className="text-left col-lg-6 col-md-12 mt-auto mb-auto">
            <div className="about-info">A BIT</div>
            <div className="about-title">About Me</div>
            <div className="about-text">
              I’m a top online marketer and branding expert, I started my career
              by lauching the popular metaverse design, in just a few short
              years, I built the brand to millions of social media followers and
              websites visitors. I also created award-winning online products
              with millions of dolloars in online sales you want, you never get
              personalized experiences and they can be upwards of $1000 on hour.
            </div>
            <div className="about-container">
              <div className="experience">
                <div className="experience-img">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FGroup%20(1).png?alt=media&token=3307ca92-9c3e-4e90-a87d-afd9ef0ef310"
                    alt="ecperience logo"
                  />
                </div>
                <div className="experience-container">
                  <div className="Experience-heading">5 years+</div>
                  <div className="Experience-text">Experience</div>
                </div>
              </div>
              <div className="about-projects-container">
                <div className="projects-image">
                  <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FGroup%201.png?alt=media&token=54291a0c-7364-4869-b8df-3db003b695d9"></img>
                </div>
                <div className="projects-container">
                  <div className="projects-heading">700+</div>
                  <div className="projects-content">Projects</div>
                </div>
              </div>
            </div>

            <div className="about-support-container">
              <div className="suppor-timage">
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FGroup.png?alt=media&token=5c3d2d37-f387-4fb4-9775-20c2a2870952"></img>
              </div>
              <div className="support-container">
                <div className="support-heading">24/7</div>
                <div className="support-content">Customer Support</div>
              </div>
            </div>

            <div className="about-button-container">
              <button
                className="about-hireme-btn"
                onClick={() => {
                  "Hire_me button cliked";
                }}
              >
                Hire me
              </button>
              <button
                className="about-downlaod-btn"
                onClick={() => {
                  "Download button cliked";
                }}
              >
                Download CV
                <img
                  className="about-download-cvpic"
                  src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2Fdownloadpic.png?alt=media&token=e405044f-cf49-44c8-8f8b-72f490e5959f"
                ></img>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default about;
