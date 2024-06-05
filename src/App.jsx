import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import { newProd } from "./data/mockData";
import { shirt } from "./data/shirtData";
import { foot } from "./data/footData";
import { tailor } from "./data/tailoringData";
import { out } from "./data/outData";
import { denim } from "./data/denimData";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Shop from "./pages/Shop";

import { useEffect, useState } from "react";
import Products from "./pages/Products";
import Product from "./components/Product";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/new" element={<Products data={newProd} />}/>                
        <Route path="/shirting" element={<Products data={shirt} />} />
        <Route path="/footwear" element={<Products data={foot} />} />
        <Route path="/tailoring" element={<Products data={tailor} />} />
        <Route path="/outwear" element={<Products data={out} />} />
        <Route path="/denim" element={<Products data={denim} />} />
        <Route path="product/:id" element={<Product />}/>
      </Routes>
      <Shop />
    </>
  );
}

export default App;
