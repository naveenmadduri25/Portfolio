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
      <img className="card-img" src={ELLIPSE2} alt="card profile picture" />
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
      <div className="buttons-container">
        <div
          btn
          className="left-B  "
          onClick={() => {
            console.log("Left Button Clicked");
          }}
        >
          ←
        </div>
        <div
          btn
          btn-primary
          className="right-B "
          onClick={() => {
            console.log("Right Button Clicked");
          }}
        >
          →
        </div>
      </div>
    </div>
  );
}

export default testimonials;
