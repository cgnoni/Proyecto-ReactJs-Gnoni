import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { mockFetch } from "../mockFetch/mockFetch";

function ItemDetailContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    mockFetch("1")
      .then(resp => console.log(resp))
      .catch((err)=> console.log(err))
  }, []);


  // const { id } = useParams();
  // const product = products.find((product) => product.id === id);

  return <ItemDetail product={products} />;

}

export default ItemDetailContainer;
