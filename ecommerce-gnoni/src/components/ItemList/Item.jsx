import React from "react";
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Item(props, {product}) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Link to={`/product/${product.id}`}>
          <Card.Img variant="top" src={props.product.imagen} />
        </Link>
        <Card.Body>
          <Card.Title>{props.product.nombre}</Card.Title>
          <Card.Text>
            {props.product.descripcion}
            <br />
            Price: {props.product.precio}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
