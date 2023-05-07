import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CiCircleRemove } from "react-icons/ci";
import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const {
    cart,
    removerProducto,
    vaciarCarrito,
    increment,
    decrement,
    totalPrice,
  } = useContext(CartContext);

  return (
    <>
      <div>
        <h1>Carrito de compras</h1>
      </div>

      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((producto) => (
              <div key={producto.id}>
                <div>
                  <img src={producto.imagen} alt={producto.nombre} />
                  <h2>{producto.nombre}</h2>
                  <p>{producto.precio}</p>
                  <button
                    onClick={() => decrement(producto.id)}
                    disabled={producto.quantity === 1 ? true : false}
                  >
                    <CiCircleRemove />
                  </button>
                  <span>{producto.quantity}</span>
                  <button
                    onClick={() => increment(producto.id)}
                    disabled={
                      producto.quantity === producto.stock ? true : false
                    }
                  >
                    <GrAddCircle />
                  </button>
                  <span onClick={() => removerProducto(producto.id)}>
                    <button>Remover producto</button>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <h3>
            Total: <br /> ${totalPrice()}
          </h3>
          <button onClick={vaciarCarrito()}>Vaciar carrito</button>
        </div>
      ) : (
        <div>
          <div>
            <p>No hay productos en tu carrito !</p>
            <Link to="/">
              <button className="btn btn-shopping">Volver al inicio</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartContainer;
