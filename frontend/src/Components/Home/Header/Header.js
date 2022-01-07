import React from 'react'
import './header.css'

function Header() {
    return (
      <div className="header">
        <div className="header__image">
          <img
            src="https://media.gq.com/photos/5d93aa2c636d4800084025ae/16:9/pass/sneakers.jpg"
            alt=""
          />
          <div className="saleOff__title">Super Flash Sale 50% Off</div>
        </div>
        <div className="saleOff">
          <div className="saleOff_item">
            <div className="saleOff_item_name">Jordan Zoom Separate PF</div>
            <div className="saleOff_item_image">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37cd492e-d0c3-4592-bc59-418e9d15cbfd/air-jordan-xxxvi-first-light-pf-basketball-shoes-fjPfDg.png"
                alt=""
              />
            </div>
            <div className="saleOff_item_price">$299,43</div>
            <div className="saleOff_item_saleprice">$499,43</div>
          </div>
          <div className="saleOff_item">
            <div className="saleOff_item_name">Jordan Zoom Separate PF</div>
            <div className="saleOff_item_image">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37cd492e-d0c3-4592-bc59-418e9d15cbfd/air-jordan-xxxvi-first-light-pf-basketball-shoes-fjPfDg.png"
                alt=""
              />
            </div>
            <div className="saleOff_item_price">$299,43</div>
            <div className="saleOff_item_saleprice">$499,43</div>
          </div>
          <div className="saleOff_item">
            <div className="saleOff_item_name">Jordan Zoom Separate PF</div>
            <div className="saleOff_item_image">
              <img
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37cd492e-d0c3-4592-bc59-418e9d15cbfd/air-jordan-xxxvi-first-light-pf-basketball-shoes-fjPfDg.png"
                alt=""
              />
            </div>
            <div className="saleOff_item_price">$299,43</div>
            <div className="saleOff_item_saleprice">$499,43</div>
          </div>
        </div>
      </div>
    );
}

export default Header
