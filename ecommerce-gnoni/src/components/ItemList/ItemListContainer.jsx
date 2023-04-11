import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "./ItemList.jsx";
import { mockFetch } from "../mockFetch/mockFetch";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    mockFetch()
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <h2 className="item-list-container__title">Productos destacados</h2>
      <div className="d-flex flex-wrap justify-content-center">
        <ItemList productos={productos} />
      </div>
    </div>
  );
};

export default ItemListContainer;
