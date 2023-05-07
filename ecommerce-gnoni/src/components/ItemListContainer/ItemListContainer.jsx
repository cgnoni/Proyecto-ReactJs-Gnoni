import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import Loading from "../Loading/Loading"

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const { cid } = useParams();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, 'productos');

    if (cid) {
      const queryFilter = query(queryCollection, where('categoria', '==', cid))

      getDocs(queryFilter)
        .then (resp => setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}))))
        .catch (err => console.log(err))
        .finally(() => setIsLoading(false))

    } else
      getDocs(queryCollection)
        .then (resp => setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data() }))))
        .catch (err => console.log(err))
        .finally(() => setIsLoading(false))
  }, [cid]);

  // const FiltradoProducto = productos.filter((prod) => {
  //   if (cid) {
  //     return prod.categoria === cid;
  //   } else if (search) {
  //     return prod.nombre.toLowerCase().includes(search.toLowerCase());
  //   } else {
  //     return [];
  //   }
  // });

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <h2 className="item-list-container__title">Productos destacados</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {isLoading ?
        <Loading />
      : <ItemList productos={productos} />
      }
      </div>
    </div>
  );
};

export default ItemListContainer;
