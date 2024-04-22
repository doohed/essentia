import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import New from "./components/New";
import Shirting from "./components/Shirting";
import Footwear from "./components/Footwear";
import Tailoring from "./components/Tailoring";
import Outwear from "./components/Outwear";
import Denim from "./components/Denim";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/new" element={<New />} />
        <Route path="/shirting" element={<Shirting />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/tailoring" element={<Tailoring />} />
        <Route path="/outwear" element={<Outwear />} />
        <Route path="/denim" element={<Denim />} />
      </Routes>
      <Shop />
    </>
  );
}

export default App;
