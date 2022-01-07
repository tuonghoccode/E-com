import React from 'react'
import {BrowserRouter as Router, Link, Routes, NavLink} from 'react-router-dom'
import img1 from '../../../img/img1.png'
import './banner.css'

function Banner() {
    return (
      <div className="banner">
        <div className="banner__text">
          <div className="__title">Adidas Men Running Sneakers</div>
          <div className="__desc">
            Performance and design. Taken right to the edge.
          </div>
          <div className="__shop-now">
              <NavLink to="/" className="__shop-now-link">
                Shop now
              </NavLink>
          </div>
        </div>
        <div className="banner__image">
          <img src={img1} alt="" />
        </div>
      </div>
    );
}

export default Banner
