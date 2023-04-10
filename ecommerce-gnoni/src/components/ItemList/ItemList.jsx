import React from "react";
import Item from "./Item";

function ItemList(props) {
  return (
    <div>
      {props.products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemList;
