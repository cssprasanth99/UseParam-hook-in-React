import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Product } from "./pages/Product";
import { ProductDetails } from "./pages/ProductDetails";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
