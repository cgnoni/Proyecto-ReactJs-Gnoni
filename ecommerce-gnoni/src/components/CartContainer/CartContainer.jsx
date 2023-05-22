import React, { useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CiCircleRemove } from "react-icons/ci";
import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { CartContext } from "../../Context/CartContext";

const CartContainer = () => {
  const [id, setId] = useState(null);
  const [formOrden, setFormOrden] = useState({
    nombre: "",
    numero: "",
    email: "",
    emailConfirmacion: "",
  });
  const [errores, setErrores] = useState({
    nombre: "",
    numero: "",
    email: "",
    emailConfirmacion: "",
  });

  const {
    cart,
    removerProducto,
    vaciarCarrito,
    increment,
    decrement,
    totalPrice,
  } = useContext(CartContext);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormOrden((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleComprar = (event) => {
    event.preventDefault();

    const { nombre, numero, email, emailConfirmacion } = formOrden;
    let errores = {};

    if (nombre.trim() === "") {
      errores.nombre = "El nombre es requerido";
    }

    if (numero.trim() === "") {
      errores.numero = "El número de contacto es requerido";
    }

    if (email.trim() === "") {
      errores.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errores.email = "El email es inválido";
    }

    if (emailConfirmacion.trim() === "") {
      errores.emailConfirmacion = "Debe confirmar el email";
    } else if (emailConfirmacion !== email) {
      errores.emailConfirmacion = "Los emails no coinciden";
    }

    if (Object.keys(errores).length === 0) {
      const orden = {
        comprador: formOrden,
        productos: cart.map(({ id, nombre, precio }) => ({
          id,
          nombre,
          precio,
        })),
        total: totalPrice(),
      };

      const db = getFirestore();
      const queryCollection = collection(db, "ordenes");

      addDoc(queryCollection, orden)
        .then((resp) => setId(resp.id))
        .catch((err) => console.log(err))
        .finally(() => {
          alert("¡Felicidades por tu compra!");
          vaciarCarrito();
        });
    } else {
      setErrores(errores);
    }
  };

  return (
    <>
      <div>
        <h1>Carrito de compras</h1>
      </div>
      {id && <h2>El id de la orden de la compra es: {id}</h2>}
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
              {errores.nombre && <Form.Text>{errores.nombre}</Form.Text>}
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
              {errores.numero && <Form.Text>{errores.numero}</Form.Text>}
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
              {errores.email && <Form.Text>{errores.email}</Form.Text>}
            </Form.Group>
            <br />
            <Form.Group>
              <Form.Control
                type="text"
                name="emailConfirmacion"
                placeholder="Repita su email"
                onChange={handleOnChange}
                value={formOrden.emailConfirmacion}
                required
              />
              {errores.emailConfirmacion && (
                <Form.Text>{errores.emailConfirmacion}</Form.Text>
              )}
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
