import React, { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemList from './ItemList';


const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('./products.json');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);
  return (
    <div className="item-list-container">
      <section>
        <h1>{props.greeting}</h1>
        <h2 className="item-list-container__title">Productos destacados</h2>
      </section>
      <ItemList products={products} />
    </div>

  );
};

export default ItemListContainer;
