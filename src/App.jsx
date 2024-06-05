import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import { newProd } from "./components/data/mockData";
import { shirt } from "./components/data/shirtData";
import { foot } from "./components/data/footData";
import { tailor } from "./components/data/tailoringData";
import { out } from "./components/data/outData";
import { denim } from "./components/data/denimData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";

import { useEffect, useState } from "react";
import Products from "./components/Products";
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
        <Route path="/new/*" element={<Products data={newProd} />}/>                
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
