import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./products.json')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Detalles de productos</h2>
      {products.map((product) => (
        <ItemDetail key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ItemDetailContainer;