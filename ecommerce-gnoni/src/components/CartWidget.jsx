import React from "react";

import { FaShoppingCart } from "react-icons/fa";

import "./styles/CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size="50px" color="black" />
      <div className="qty-display">0</div>
    </div>
  );
};

export default CartWidget;
