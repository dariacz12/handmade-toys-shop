import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import AboutMe from "./pages/AboutMe";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactpage" element={<ContactPage />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/productlist/:id" element={<ProductList />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/productpage/:id" element={<ProductPage />} />
    </Routes>
  );
};

export default App;
