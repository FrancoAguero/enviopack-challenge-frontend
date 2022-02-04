import React from "react"

//React-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Context
import { CartProvider } from 'context/CartContext';

//Components
import NavBar from "components/NavBar";

//Views
import Home from "views/Home";
import Cart from "views/Cart";
import PurchaseStatus from "views/PurchaseStatus";

const App = () => {
  
  
  return (
    <Router>
      <CartProvider>
      <NavBar />
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/estadoDeCompra" element={<PurchaseStatus/>}/>
      </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
