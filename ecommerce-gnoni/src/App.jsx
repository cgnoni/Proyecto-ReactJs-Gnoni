import React from "react";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemList/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />} />
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting="Bienvenidos!" />}
          />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
