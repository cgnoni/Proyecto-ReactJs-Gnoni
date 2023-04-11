import ItemCount from "../ItemCount/ItemCount";


function ItemDetail(props) {
  return (
    <div className="row">
      <div className="col-12">Detalle del producto</div>
      <div className="col-6">
        <img src={props.product.imagen} />
        <h2>{props.product.nombre}</h2>
        <p>{props.product.descripcion}</p>
        <br />
        <h3>Precio: {props.product.precio}</h3>
        <br />
        <h4>Stock: {props.product.stock}</h4>
      </div>
      <div className="col-6">
        <ItemCount />
      </div>
    </div>
  );
}

export default ItemDetail;
