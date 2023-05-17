import React from "react";
import "./CartWidget.css";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext, useCartContext } from "../../Context/CartContext";



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
