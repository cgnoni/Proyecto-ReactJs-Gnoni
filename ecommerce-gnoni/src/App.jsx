import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemList/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting = "Bienvenidos!" />} />
          <Route path="/categoria/:cid" element={<ItemListContainer />} />
          <Route path="/detail/:pid" element={<ItemDetailContainer />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  ;
}

export default App;
