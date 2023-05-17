import React, { useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CiCircleRemove } from "react-icons/ci";
import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";

const CartContainer = () => {
  const [formOrden, setFormOrden] = useState({
    nombre: "",
    numero: "",
    email: "",
  });

  const {
    cart,
    removerProducto,
    vaciarCarrito,
    increment,
    decrement,
    totalPrice,
  } = useContext(CartContext);

  const handleComprar = (event) => {
    event.preventDefault();

    const orden = {
      comprador: formOrden,
      productos: cart.map(({ id, nombre, precio }) => ({ id, nombre, precio })),
      total: totalPrice(),
    };

    const db = getFirestore();
    const queryCollection = collection(db, "ordenes");

    addDoc(queryCollection, orden)
      .then(({ id }) => console.log({ id }))
      .catch((resp) => console.log(resp))
      .finally(() => vaciarCarrito());
    alert("¡Felicidades por tu compra!");
  };

  const handleOnChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setFormOrden({
      ...formOrden,
      [event.target.name]: event.target.value,
    });
  };

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
            Total: <br /> $ {totalPrice()}
          </h3>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
          <br />
          <br />
          <Form onSubmit={handleComprar}>
            <Form.Group controlId="formName">
              <Form.Control
                type="text"
                name="nombre"
                placeholder="Ingrese su nombre y apellido"
                onChange={handleOnChange}
                value={formOrden.nombre}
                required
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control
                type="text"
                name="numero"
                placeholder="Ingrese su numero de contacto"
                onChange={handleOnChange}
                value={formOrden.numero}
                required
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control
                type="text"
                name="email"
                placeholder="Ingrese su email"
                onChange={handleOnChange}
                value={formOrden.email}
                required
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control
                type="text"
                name="email"
                placeholder="Repita su email"
                onChange={handleOnChange}
                value={formOrden.email}
                required
              />
            </Form.Group>
            <br />
            <button>Generar Orden</button>
          </Form>
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
