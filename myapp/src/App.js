import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CategoriesPage from "./components/Pages/CategoriesPage";
import DiscountsPage from "./components/Pages/DiscountsPage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import ProductPage from "./components/Pages/ProductPage";
import ShoppingCartPage from "./components/Pages/ShoppingCartPage";
import AllProductsPage from "./components/Pages/AllProductsPage";
import ToolEquipmentPage from "./components/Pages/ToolEquimentPage";
import Header from "./components/Header";
import Footer from "./components/Footer"
import MainPage from "./components/Pages/MainPage";

export default function App() {
  return (
    <div className="app_container">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/sales" element={<DiscountsPage />} />
        <Route path="/categories/:name" element={<ToolEquipmentPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
