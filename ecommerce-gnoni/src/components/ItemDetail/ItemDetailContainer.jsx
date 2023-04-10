import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  return (
    <div>
      <h1>Detalles de productos</h1>
      {products.map((product) => (
        <ItemDetail key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemDetailContainer;