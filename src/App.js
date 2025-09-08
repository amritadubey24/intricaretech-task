import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import ProductTable from "./components/ProductTable";
import ProductForm from "./components/ProductForm";
import Home from "./pages/Home"; import ProductView from "./components/ProductView";



function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductTable />} />
        <Route path="/add" element={<ProductForm isEdit={false} />} />
        <Route path="/edit/:id" element={<ProductForm isEdit={true} />} />
        <Route path="/view/:id" element={<ProductView />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
