import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllProductsPage from "./components/Pages/AllProductsPage/Inform";
import CategoriesPage from "./components/Pages/CategoriesPage";
import DiscountsPage from "./components/Pages/DiscountsPage";
import HomePage from "./components/Pages/HomePage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import ProductPage from "./components/Pages/ProductPage";
import ShoppingCartPage from "./components/Pages/ShoppingCartPage";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="/sales" element={<DiscountsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
