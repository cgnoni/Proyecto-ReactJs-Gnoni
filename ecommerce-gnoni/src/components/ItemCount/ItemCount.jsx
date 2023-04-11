import { useState } from "react";
import useCount from "../../hooks/useCount";

const ItemCount = ({ initial = 0, stock = 20, min = 1 }) => {
  const { contador, increment, decrement, reset } = useCount(1, stock, initial);
  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ItemCount;
