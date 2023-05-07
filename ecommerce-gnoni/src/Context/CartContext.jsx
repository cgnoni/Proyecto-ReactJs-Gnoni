import { createContext, useContext, useEffect, useState } from "react";
import { mockFetch } from "../components/mockFetch/mockFetch";


export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
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

  const removerProducto = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const totalPrice = () => {
    return cart.reduce(
      (precioTotal, objProd) => precioTotal += (objProd.quantity * objProd.price), 0);
  };
  
  const totalProductos = () => {
    return cart.reduce(
      (totalProductos, objProd) => totalProductos + objProd.quantity, 0
    );
  };

  const vaciarCarrito = () => setCart([]);

  const increment = (itemId) => {
    const newCartItems = cart.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(newCartItems);
  };

  const decrement = (itemId) => {
    const newCartItems = cart.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removerProducto,
        vaciarCarrito,
        increment,
        decrement,
        totalPrice,
        totalProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
