import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemList/ItemListContainer.jsx';

import './App.css'

function App() {

  return (
    <div className='container-fluid'>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!"/>
    </div>
  )
}

export default App;
