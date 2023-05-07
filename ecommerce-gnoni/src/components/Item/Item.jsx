import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Item ({ producto }) {
  return (
    <CardGroup className="m-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            <br />
            Precio: $ {producto.precio}
          </Card.Text>
          <Link to={`/detail/${producto.id}`}>
            <Button variant="info">Detalles</Button>
          </Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Item;
