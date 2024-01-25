import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoriesPage from "./components/Pages/CategoriesPage";
import DiscountsPage from "./components/Pages/DiscountsPage";
import HomePage from "./components/Pages/HomePage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import ProductPage from "./components/Pages/ProductPage";
import ShoppingCartPage from "./components/Pages/ShoppingCartPage";
import AllProductsPage from "./components/Pages/AllProductsPage";
import ToolEquipmentPage from "./components/Pages/ToolEquimentPage";


export default function App() {
  return (
    <div className="app_container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/products/:categoryName" element={<ToolEquipmentPage />} />
        <Route path="/sales" element={<DiscountsPage />} />
        <Route path="/shopping-cart" element={<ShoppingCartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
