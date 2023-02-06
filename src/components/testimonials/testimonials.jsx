import React from "react";
import "./testimonials.css";
import Button from "react-bootstrap/Button";
import ELLIPSE2 from "../../images/Ellipse 2.png";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const testimonials = () => {
  return (
    <div className="testimonial" id="testimonials">
      <div className="t-info">TESTIMONIALS </div>
      <div className="t-heading">What People Says</div>
      <TestimonialCard />
    </div>
  );
};
function TestimonialCard() {
  return (
    <div className="testimonial-card">
      <img
        className="card-img"
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-39221.appspot.com/o/Portfolio-Images%2FEllipse%202.png?alt=media&token=8b76ec18-e2be-4a57-bd62-6e35c56df6ab"
      />
      <div className="content">
        <RiDoubleQuotesL className="left" />
        <div className="sub-content">
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
          </p>
          <p className="author-name"> Karmani</p>
          <p className="author-desognation"> FOUNDER AND CEO OF KARMANI</p>
        </div>
        <RiDoubleQuotesR className="right" />
      </div>
      <div className="ButtonsContainer">
        <button
          className="leftB"
          onClick={() => {
            console.log("Left Button Clicked");
          }}
        >
          ←
        </button>
        <button
          className="rightB"
          onClick={() => {
            console.log("Right Button Clicked");
          }}
        >
          →
        </button>
      </div>
    </div>
  );
}

export default testimonials;
