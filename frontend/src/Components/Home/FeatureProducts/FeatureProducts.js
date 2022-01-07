import React from "react";
import "./featureproducts.css";
import "boxicons";
function FeatureProducts() {
  return (
    <div className="feature-products">
      <div className="title">FEATURE PRODUCTS</div>
      <div className="feature-products__list">
        <div className="feature-products__list-item">
          <div className="image">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6417b6dc-c08c-4c15-95df-4ca7eaeb72f0/air-jordan-11-retro-shoes-4x2Pv2.png"
              alt=""
            />
          </div>
          <div className="text">
            <div className="name">Blue Swade Nike Sneakers</div>
            <div className="rate">
              <box-icon type="solid" color="#FFC600" name="star"></box-icon>
              <box-icon type="solid" color="#FFC600" name="star"></box-icon>
              <box-icon type="solid" color="#FFC600" name="star"></box-icon>
              <box-icon type="solid" color="#FFC600" name="star"></box-icon>
              <box-icon
                type="solid"
                color="#FFC600"
                name="star-half"
              ></box-icon>
            </div>
            <div className="price">
              <div className="current__price">$499</div>
              <div className="sale__price">$599</div>
            </div>
          </div>
        </div>
        <div className="feature-products__list-item">
          <div className="image">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6417b6dc-c08c-4c15-95df-4ca7eaeb72f0/air-jordan-11-retro-shoes-4x2Pv2.png"
              alt=""
            />
          </div>
          <div className="text">
            <div className="name">Blue Swade Nike Sneakers</div>
            <div className="rate">
              <box-icon type="solid" color="#FFC600" name="star"></box-icon>
              <box-icon type="solid" color="#FFC600" name="star"></box-icon>
              <box-icon type="solid" color="#FFC600" name="star"></box-icon>
              <box-icon type="solid" color="#FFC600" name="star"></box-icon>
              <box-icon
                type="solid"
                color="#FFC600"
                name="star-half"
              ></box-icon>
            </div>
            <div className="price">
              <div className="current__price">$499</div>
              <div className="sale__price">$599</div>
            </div>
          </div>
        </div>
        <div className="feature-products__list-item">
          <div className="image">
            <img
              src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6417b6dc-c08c-4c15-95df-4ca7eaeb72f0/air-jordan-11-retro-shoes-4x2Pv2.png"
              alt=""
            />
          </div>
          <div className="text">
            <div className="name">Blue Swade Nike Sneakers</div>
            <div className="rate">
              <box-icon type="solid" color="#FFC600" name="star"></box-icon>
              <box-icon type="solid" color="#FFC600" name="star"></box-icon>
              <box-icon type="solid" color="#FFC600" name="star"></box-icon>
              <box-icon type="solid" color="#FFC600" name="star"></box-icon>
              <box-icon
                type="solid"
                color="#FFC600"
                name="star-half"
              ></box-icon>
            </div>
            <div className="price">
              <div className="current__price">$499</div>
              <div className="sale__price">$599</div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-products__search">
        <input type="text" placeholder="Search query..." />
        <div className="search">Search</div>
      </div>
    </div>
  );
}

export default FeatureProducts;
