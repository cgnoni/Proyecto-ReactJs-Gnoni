import React from "react";
import { Card } from "react-bootstrap";


function Item(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.product.imagen} />
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
