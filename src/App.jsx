import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import New from "./components/New";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/new" element={<New />} />
      </Routes>
      <Shop />
    </>
  );
}

export default App;
