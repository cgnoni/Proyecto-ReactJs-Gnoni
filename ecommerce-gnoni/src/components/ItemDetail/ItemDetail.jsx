import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { CartButtons } from "../CartButtons/CartButtons";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({producto}) => {
  const [goToCart, setGoToCart] = useState(false);

  const { addToCart } = useCartContext();

  const onAdd = (cantidad) => {
    console.log(cantidad);
    addToCart({ ...product, quantity: cantidad });
    setGoToCart(true);
  };

  return (
    <div className="row">
      <h1 className="col-12">Detalle del producto</h1>
      <div className="col-7">
        <img src={producto.imagen} />
        <h2>{producto.nombre}</h2>
        <p>{producto.descripcion}</p>
        <br />
        <h3>Precio: {producto.precio}</h3>
        <br />
        <h4>Stock: {producto.stock}</h4>
      </div>
      <div className="col-5">
      {goToCart ? (
            <CartButtons />
          ) : (
        <ItemCount initial={1} stock={20} onAdd={onAdd} />)}
      </div>
    </div>
  );
}

export default ItemDetail;
