import React from "react";
import refund from "../../../img/refund.png";
import shipping from "../../../img/shipping.png";
import support from "../../../img/support.png";
import "./whyus.css";
function Whyus() {
  return (
    <div className="why-us">
      <div className="why-us__item">
        <div className="logo">
          <img src={shipping} alt="" />
        </div>
        <div className="text">
          <div className="title">FREE SHIPPING</div>
          <div className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
      <div className="why-us__item">
        <div className="logo">
          <img src={refund} alt="" />
        </div>
        <div className="text">
          <div className="title">100% REFUND</div>
          <div className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
      <div className="why-us__item">
        <div className="logo">
          <img src={support} alt="" />
        </div>
        <div className="text">
          <div className="title">SUPPORT 24/7</div>
          <div className="desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
