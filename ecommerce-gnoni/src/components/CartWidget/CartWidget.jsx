import React from "react";
import { CartContext, useCartContext } from "../../context/CartContext";
import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";



const CartWidget = () => {
  const { totalProductos } = useCartContext(CartContext);
  return (
    <button className="cart-widget">
      <FaShoppingCart size="50px" color="black" />
      <div className="qty-display">{totalProductos()}</div>
    </button>
  );
};

export default CartWidget;
