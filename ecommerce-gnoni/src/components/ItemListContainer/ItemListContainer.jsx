import React, { useContext, useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.jsx";
//import { mockFetch } from "../mockFetch/mockFetch";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemListContainer = ({ greeting }) => {
  const { productos } = useContext(CartContext);
  const { tId } = useParams();

  // useEffect(() => {
  //   if (cid) {
  //     mockFetch()
  //       .then(resp =>
  //         setProductos(resp.filter(prod => prod.categoria === cid)))
  //       .catch(err => console.log(err));
  //   } else
  //     mockFetch()
  //       .then(resp => setProductos(resp))
  //       .catch(err => console.log(err));
  // }, [cid]);

  const filtradoProducto = productos.filter((prod) => {
    if (tId) {
      return prod.categoria === tId;
    } else if (search) {
      return prod.nombre.toLowerCase().includes(search.toLowerCase());
    } else {
      return [];
    }
  });

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <h2 className="item-list-container__title">Productos destacados</h2>
      <div className="d-flex flex-wrap justify-content-center">
        <ItemList productos={filtradoProducto} />
      </div>
    </div>
  );
};

export default ItemListContainer;
