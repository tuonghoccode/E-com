import React from 'react'
import './footer.css'
import {BrowserRouter as Router, Link,NavLink} from 'react-router-dom'
import master from "../../img/master-card.png";
import paypal from "../../img/Paypal.png";
import westerm from "../../img/westerm.png";

function Footer() {
    return (
      <div className="footer">
        <div className="first">
          <div className="e-comm">
            <div className="title">
              <svg
                width="135"
                height="45"
                viewBox="0 0 135 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.00244141"
                  width="44"
                  height="44"
                  rx="16"
                  fill="#40BFFF"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.0619 20.274C32.0165 21.2286 32.0165 22.7763 31.0619 23.7309L23.7285 31.0643C22.7739 32.0189 21.2262 32.0189 20.2716 31.0643L12.9382 23.7309C11.9836 22.7763 11.9836 21.2286 12.9382 20.274L20.2716 12.9406C21.2262 11.986 22.7739 11.986 23.7285 12.9406L31.0619 20.274ZM22.0001 18.1261L18.1237 22.0024L22.0001 25.8788L25.8764 22.0024L22.0001 18.1261Z"
                  fill="white"
                />
                <path
                  d="M59.1714 17.1442H51.4314V29.7802H59.1714V27.3142H54.5094V24.5422H58.6314V22.1662H54.5094V19.6102H59.1714V17.1442ZM60.9897 24.7402H68.9097V22.1842H60.9897V24.7402ZM71.0891 23.4442C71.0891 27.2242 73.7171 29.8702 77.4431 29.8702C80.4491 29.8702 82.7171 28.1962 83.4371 25.4602H80.0531C79.5311 26.5402 78.5771 27.0802 77.4071 27.0802C75.5171 27.0802 74.2211 25.6762 74.2211 23.4442C74.2211 21.2122 75.5171 19.8082 77.4071 19.8082C78.5771 19.8082 79.5311 20.3482 80.0531 21.4282H83.4371C82.7171 18.6922 80.4491 17.0002 77.4431 17.0002C73.7171 17.0002 71.0891 19.6642 71.0891 23.4442ZM95.1501 24.7582C95.1501 21.5722 92.8821 19.5922 89.9301 19.5922C86.9961 19.5922 84.7101 21.5722 84.7101 24.7582C84.7101 27.9442 86.9421 29.9242 89.8941 29.9242C92.8461 29.9242 95.1501 27.9442 95.1501 24.7582ZM87.8421 24.7582C87.8421 23.0482 88.8141 22.2562 89.9301 22.2562C91.0101 22.2562 92.0181 23.0482 92.0181 24.7582C92.0181 26.4502 90.9921 27.2602 89.8941 27.2602C88.7781 27.2602 87.8421 26.4502 87.8421 24.7582ZM110.625 29.7802H113.685V23.9122C113.685 21.2122 112.083 19.6282 109.599 19.6282C108.141 19.6282 106.881 20.4382 106.215 21.5002C105.531 20.2942 104.307 19.6282 102.795 19.6282C101.481 19.6282 100.455 20.1862 99.861 20.9962V19.7362H96.783V29.7802H99.861V24.3262C99.861 23.0122 100.617 22.2922 101.787 22.2922C102.957 22.2922 103.713 23.0122 103.713 24.3262V29.7802H106.773V24.3262C106.773 23.0122 107.529 22.2922 108.699 22.2922C109.869 22.2922 110.625 23.0122 110.625 24.3262V29.7802ZM129.68 29.7802H132.74V23.9122C132.74 21.2122 131.138 19.6282 128.654 19.6282C127.196 19.6282 125.936 20.4382 125.27 21.5002C124.586 20.2942 123.362 19.6282 121.85 19.6282C120.536 19.6282 119.51 20.1862 118.916 20.9962V19.7362H115.838V29.7802H118.916V24.3262C118.916 23.0122 119.672 22.2922 120.842 22.2922C122.012 22.2922 122.768 23.0122 122.768 24.3262V29.7802H125.828V24.3262C125.828 23.0122 126.584 22.2922 127.754 22.2922C128.924 22.2922 129.68 23.0122 129.68 24.3262V29.7802Z"
                  fill="#22262A"
                />
              </svg>
            </div>
            <div className="desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </div>
          </div>
          <div className="follow">
            <div className="title">Follow Us</div>
            <div className="desc">
              Since the 1500s, when an unknown printer took a galley of type and
              scrambled.
            </div>
            <div className="social">
              <box-icon name="facebook" type="logo" color="#385C8E"></box-icon>
              <box-icon name="twitter" type="logo" color="#03A9F4"></box-icon>
            </div>
          </div>
          <div className="contact">
            <div className="title">Contact Us</div>
            <div className="desc">
              E-Comm , 4578 Marmora Road, Glasgow D04 89GR
            </div>
          </div>
        </div>
        <div className="second">
          <div className="second__item">
            <div className="title">Infomation</div>
            <div className="more-info">
                <NavLink className="more-info-link" to="/">
                  About Us
                </NavLink>
                <NavLink className="more-info-link" to="/">
                  Infomation
                </NavLink>
                <NavLink className="more-info-link" to="/">
                  Privacy Policy
                </NavLink>
                <NavLink className="more-info-link" to="/">
                  Terms and Conditions
                </NavLink>
            </div>
          </div>
          <div className="second__item">
            <div className="title">Service</div>
            <div className="more-info">
                <NavLink className="more-info-link" to="/">
                  About Us
                </NavLink>
                <NavLink className="more-info-link" to="/">
                  Infomation
                </NavLink>
                <NavLink className="more-info-link" to="/">
                  Privacy Policy
                </NavLink>
                <NavLink className="more-info-link" to="/">
                  Terms and Conditions
                </NavLink>
            </div>
          </div>
          <div className="second__item">
            <div className="title">My Account</div>
            <div className="more-info">
                <NavLink className="more-info-link" to="/">
                  About Us
                </NavLink>
                <NavLink className="more-info-link" to="/">
                  Infomation
                </NavLink>
                <NavLink className="more-info-link" to="/">
                  Privacy Policy
                </NavLink>
                <NavLink className="more-info-link" to="/">
                  Terms and Conditions
                </NavLink>
            </div>
          </div>
          <div className="second__item">
            <div className="title">Our Offers</div>
            <div className="more-info">
                <NavLink className="more-info-link" to="/">
                  About Us
                </NavLink>
                <NavLink className="more-info-link" to="/">
                  Infomation
                </NavLink>
                <NavLink className="more-info-link" to="/">
                  Privacy Policy
                </NavLink>
                <NavLink className="more-info-link" to="/">
                  Terms and Conditions
                </NavLink>
            </div>
          </div>
        </div>
        <div className="last">
          <div className="coppy-right">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </div>
          <div className="card">
            <img src={westerm} alt="" />
            <img src={master} alt="" />
            <img src={paypal} alt="" />
          </div>
        </div>
      </div>
    );
}

export default Footer
