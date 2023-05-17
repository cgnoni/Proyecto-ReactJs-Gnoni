import { useState } from "react";
import useCount from "../../hooks/useCount";


const ItemCount = ({ initial = 0, stock = 20, min = 1, onAdd }) => {
  const { contador, increment, decrement, reset } = useCount(1, stock, initial);

  function handleOnAdd() {
    onAdd(contador)
  };

  return (
    <div>
      <h2>Cantidad: {contador}</h2>
      <button className="btn-info" onClick={increment}>+</button>
      <button className="btn-info" onClick={decrement}>-</button>
      <button className="btn-info" onClick={handleOnAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
