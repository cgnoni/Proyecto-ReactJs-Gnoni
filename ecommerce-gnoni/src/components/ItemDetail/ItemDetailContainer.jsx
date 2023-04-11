import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { mockFetch } from "../mockFetch/mockFetch";

function ItemDetailContainer() {
  const [producto, setProducto] = useState({});
  const { pid } = useParams();

  useEffect(() => {
    mockFetch(pid)
      .then(resp => setProducto(resp))
      .catch(err => console.log(err));
  }, []);

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;
