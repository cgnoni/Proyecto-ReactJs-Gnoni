import React from 'react';
import { Card } from 'react-bootstrap';

function ItemDetail(props) {
  const { product } = props;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={props.product.imagen} />
        <Card.Body>
          <Card.Title>{props.product.nombre}</Card.Title>
          <Card.Text>
            {props.product.descripcion}
            <br />
            Precio: {props.product.precio}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;