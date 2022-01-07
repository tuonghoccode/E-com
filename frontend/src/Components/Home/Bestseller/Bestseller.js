import React, { useContext } from "react";
import "./bestseller.css";
import "boxicons";
import { useState ,useEffect} from "react";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { ProductContext } from "../../Contexts/ProductContext";

function Bestseller() {
  const { products, setMyCartCounter, setMyItemCart, myItemCart,setSubtotal } =
    useContext(ProductContext);
  
  const [mySneaker, setMySneaker] = useState(products.sneaker);

  useEffect(() => {
    setMySneaker(products.sneaker);
  }, [products]);

  const filterHandle = (type) => {
    setMySneaker(products[type]);
  };

  const clickHandle = () => {
    setMyCartCounter(prev => prev+1)
  }

  const addToCart = (item) => {
    if (!myItemCart.includes(item)){
      item.value = 1;
      setMyItemCart([...myItemCart,item]);
    }
    else{
      item.value +=1;
    }
    let newPrice = Number(item.price.slice(0,-1).replaceAll(',',''));
    setSubtotal((total) => total + newPrice);
  }

  return (
    <div>
      <div className="bestseller">Best Seller</div>
      <div className="filter">
        <div
          className="filter__nav"
          onClick={() => {
            filterHandle("sneaker");
          }}
        >
          All
        </div>
        <div
          className="filter__nav"
          onClick={() => {
            filterHandle("bag");
          }}
        >
          Bags
        </div>
        <div
          className="filter__nav"
          onClick={() => {
            filterHandle("sneaker");
          }}
        >
          Sneakers
        </div>
        <div
          className="filter__nav"
          onClick={() => {
            filterHandle("belt");
          }}
        >
          Belt
        </div>
      </div>
      <div className="filter__list">
        {mySneaker
          ? mySneaker.map((item, key) => (
              <div
                key={key}
                className="filter__list__item"
                onClick={clickHandle}
              >
                <div className="image" onClick={()=>addToCart(item)}>
                  <img src={item.imageURL} alt="" />
                </div>
                <div className="name">{item.name}</div>
                <div className="rate">
                  <box-icon type="solid" color="#FFC600" name="star"></box-icon>
                  <box-icon type="solid" color="#FFC600" name="star"></box-icon>
                  <box-icon type="solid" color="#FFC600" name="star"></box-icon>
                  <box-icon type="solid" color="#FFC600" name="star"></box-icon>
                  <box-icon
                    name="star-half"
                    color="#FFC600"
                    type="solid"
                  ></box-icon>
                </div>
                <div className="price">
                  <div className="current__price">$299,43</div>
                  <div className="saleOff__price">$534,33</div>
                  <div className="salePercent">24% off</div>
                </div>
              </div>
            ))
          : () => {
              setMySneaker(products.sneaker);
            }}
      </div>
      <div className="load-more">
          <NavLink  to="/" className="load-more-link">
            Load more
          </NavLink>
      </div>
    </div>
  );
}

export default Bestseller;