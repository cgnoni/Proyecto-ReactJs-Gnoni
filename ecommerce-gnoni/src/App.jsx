import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { CartProvider } from "./Context/CartContext.jsx";
import CartContainer from "./components/CartContainer/CartContainer.jsx";
import ContactForm from "./components/Contact/Contact.jsx";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="container-fluid">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Bienvenidos!" />}
            />
            <Route path="/categoria/:cid" element={<ItemListContainer />} />
            <Route path="/detail/:pid" element={<ItemDetailContainer />} />
            <Route path="/contact" element={<ContactForm/>} />
            <Route path="/cartContainer" element={<CartContainer />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
