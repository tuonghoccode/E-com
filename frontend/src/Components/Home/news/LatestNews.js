import React from "react";
import "./latestnews.css";
import Nike from "../../../img/Nike.png";
import kronos from "../../../img/kronos.png";
import figma from "../../../img/figma.png";
import "./latestnews.css";

function LatestNews() {
  return (
    <div className="news">
      <div className="news__title">LATEST NEWS</div>
      <div className="news__list">
        <div className="news__list-item">
          <div className="image">
            <img src={Nike} alt="" />
          </div>
          <div className="text">
            <div className="timestamp">01 Jan, 2015</div>
            <div className="slogan">Fashion Industry</div>
            <div className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
        <div className="news__list-item">
          <div className="image">
            <img src={figma} alt="" />
          </div>
          <div className="text">
            <div className="timestamp">01 Jan, 2015</div>
            <div className="slogan">Best Design Tools</div>
            <div className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
        <div className="news__list-item">
          <div className="image">
            <img src={kronos} alt="" />
          </div>
          <div className="text">
            <div className="timestamp">01 Jan, 2015</div>
            <div className="slogan">HR Community</div>
            <div className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
