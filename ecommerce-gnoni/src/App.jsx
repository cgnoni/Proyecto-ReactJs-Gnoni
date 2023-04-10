import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/NavBar.jsx";
import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.jsx";

function App() {
  return (
    <div className="container-fluid">
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Bienvenidos!" />
          </Route>
          <Route path="/product/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
