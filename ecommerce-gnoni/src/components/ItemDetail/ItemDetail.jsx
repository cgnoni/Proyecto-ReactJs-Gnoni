import React from 'react';
import { Card } from 'react-bootstrap';

function ItemDetail(props) {
  return (
    <div>
        <img src={props.product.imagen} />
        <h2>{props.product.nombre}</h2>
        <p>{props.product.descripcion}</p>
        <br />
        <h3>Precio: {props.product.precio}</h3>
    </div>
  );
}

export default ItemDetail;