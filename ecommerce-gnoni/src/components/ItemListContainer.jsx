import React from 'react';
import './styles/ItemListContainer.css';

const ItemListContainer = (props) => {
  return (
    <section className="item-list-container">
      <h1>{props.greeting}</h1>
      <h2 className="item-list-container__title">Productos destacados</h2>
    </section>
  );
};

export default ItemListContainer;