import { createContext, useContext, useEffect, useState } from "react";
import { mockFetch } from "../components/mockFetch/mockFetch";


export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ props }) => {
  const [cart, setCart] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    mockFetch()
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (nuevoProducto) => {
    const existingProducto = cart.find((prod) => prod.id === nuevoProducto.id);
    if (existingProducto) {
      setCart(
        cart.map((prod) =>
          prod.id === nuevoProducto.id
            ? {
                ...prod,
                quantity: existingProducto.quantity + nuevoProducto.quantity,
              }
            : prod
        )
      );
    } else {
      setCart([...cart, nuevoProducto]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const totalPrice = () => {
    return cart.reduce(
      (acc, current) => acc + current.quantity * current.price,
      0
    );
  };
  const totalProductos = () => {
    return cart.reduce(
      (accumulator, currentProduct) => accumulator + currentProduct.quantity,
      0
    );
  };

  const clearCart = () => setCart([]);

  const increment = (itemId) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const decrement = (itemId) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        productos,
        addToCart,
        removeFromCart,
        clearCart,
        increment,
        decrement,
        totalPrice,
        totalProductos,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
