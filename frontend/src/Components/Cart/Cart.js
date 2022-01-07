import React, { useContext, useState } from "react";
import { ProductContext } from "../Contexts/ProductContext";
import "./cart.css";

function Cart() {
  const { setMyCartCounter, myItemCart,subtotal, setSubtotal, setMyItemCart} = useContext(ProductContext);

  const decreaseHandle = (item) => {
    if (item.value <=1) {
      item.value = 1;
    }
    else{
      item.value -= 1;
      setSubtotal(
        (prev) => prev - Number(item.price.slice(0, -1).replaceAll(",", ""))
        );
      setMyCartCounter((prev) => (prev>1)? prev - 1 : prev);
    }
  };
  const increaseHandle = (item) => {
    setMyCartCounter((prev) => prev + 1);
    setSubtotal(prev => prev + Number(item.price.slice(0,-1).replaceAll(',','')))
    
     item.value += 1;

  };
  const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
  const calculateTotal = subtotal + 50000;

  const deleteItem = (item) => {
    setMyItemCart(prev => prev.filter(x => x!=item));
    setMyCartCounter((prev) =>prev - item.value);
    setSubtotal(
      (prev) => prev - item.value*Number(item.price.slice(0, -1).replaceAll(",", ""))
    );
    
  }
  return (
    <div className="cart">
      <div className="cart__title">
        <div className="product">PRODUCT</div>
        <div className="price">PRICE</div>
        <div className="qty">QTY</div>
        <div className="unit-price">UNIT PRICE</div>
      </div>
      {myItemCart
        ? myItemCart.map((item, key) => (
            <div className="product-item" key={key}>
              <div className="product">
                <div className="image">
                  <box-icon name="x-circle" onClick={()=> deleteItem(item)} color="#FF4252"></box-icon>
                  <img src={item.imageURL} alt="" />
                </div>
                <div className="product__name">{item.name}</div>
              </div>
              <div className="price">{item.price}</div>
              <div className="qty">
                <div className="btn-decrease" onClick={()=>decreaseHandle(item)}>
                  <button>
                    <box-icon name="minus" color="#33A0FF"></box-icon>
                  </button>
                </div>
                <div className="qty--counter">{item.value}</div>
                <div className="btn-increase" onClick={()=>increaseHandle(item)}>
                  <button className="btn-increase">
                    <box-icon name="plus" color="#33A0FF"></box-icon>
                  </button>
                </div>
              </div>
              <div className="unit-price">$499</div>
            </div>
          ))
        : []}

      <div className="payment">
        <div className="voucher">
          <input type="text" placeholder="Voucher code" />
          <button>Redeem</button>
        </div>
        <div className="total-cost">
          <div className="fee">
            <div className="subtotal">
              <div className="title">Subtotal</div>
              <div className="cost">{formatNumber(subtotal)}₫</div>
            </div>
            <div className="shipping-fee">
              <div className="title">Shiping fee</div>
              <div className="cost">50,000₫</div>
            </div>
            <div className="coupon">
              <div className="title">Coupon</div>
              <div className="cost">0</div>
            </div>
          </div>
          <div className="total">
            <div className="total__title">TOTAL</div>
            <div className="total__cost">{formatNumber(calculateTotal)}₫</div>
          </div>
          <button className="check-out">Check out</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
