import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="app m-auto flex h-auto w-full flex-col items-center justify-center p-0">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
