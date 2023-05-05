import { Link } from "react-router-dom";

export const CartButtons = () => {
  return (
    <div>
      <Link className="btn btn-primary" to="/cartContainer">
        Ir al carrito
      </Link>
      <Link className="btn btn-primary continue" to="/">
        Continuar comprando
      </Link>
    </div>
  );
};
