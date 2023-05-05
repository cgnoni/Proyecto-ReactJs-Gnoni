import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { CiCircleRemove } from "react-icons/ci";
import { GrAddCircle } from "react-icons/gr";


const CartContainer = () => {
  const {
    productos,
    removeFromCart,
    clearCart,
    increment,
    decrement,
    totalPrice,
  } = useContext(CartContext);

  return (
    <>
      <div>
        <h1>Carrito de compras</h1>
      </div>

      {productos.length > 0 ? (
        <div>
          <div>
            {productos.map((item) => (
              <div key={item.id}>
                <div>
                  <img src={item.imagen} alt={item.nombre} />
                  <h2>{item.nombre}</h2>
                  <p>{item.precio}</p>
                  <button
                    onClick={() => decrement(item.id)}
                    disabled={item.quantity === 1 ? true : false}
                  >
                    <CiCircleRemove />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increment(item.id)}
                    disabled={item.quantity === item.stock ? true : false}
                  >
                    <GrAddCircle />
                  </button>
                  <span onClick={() => removeFromCart(item.id)}>
                    <button>Remover producto</button>
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <button onClick={() => clearCart()}>Clear cart</button>

            <div>
              <p>
                Total: <br /> ${totalPrice()}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <p>Your cart is empty </p>
            <Link to="/">
              <button className="btn btn-shopping">Go shopping</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default CartContainer;
