import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "../views/Category";
import Product from "../views/Product"
import Navbar from "./Components/Navbar";
import HomePage from "../views/HomePage";
import Footer from "./Components/Footer";
import MenBanner from "./assets/banner_mens.png";
import WomenBanner from "./assets/banner_women.png";
import KidsBanner from "./assets/banner_kids.png";
import CartItems from "./Components/CartItems";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/mensFashion"
            element={<Category banner={MenBanner} category="men"></Category>}
          ></Route>
          <Route
            path="/womenCorner"
            element={<Category banner={WomenBanner} category="women"></Category>}
          ></Route>
          <Route
            path="/kidsSection"
            element={<Category banner={KidsBanner} category="kid"></Category>}
          ></Route>
          <Route
            path="/cart"
            element={<CartItems></CartItems>}
          ></Route>
          <Route path="/product" element={<Product/>}>
             <Route path=":productId" element={<Product></Product>}></Route>
          </Route>
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
