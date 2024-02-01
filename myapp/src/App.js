import { Routes, Route } from "react-router-dom";
import "./App.css";
import CategoriesPage from "./components/Pages/CategoriesPage";
import DiscountsPage from "./components/Pages/DiscountsPage";
import NotFoundPage from "./components/Pages/NotFoundPage";
import ProductPage from "./components/Pages/ProductPage";
import ShoppingCartPage from "./components/Pages/ShoppingCartPage";
import AllProductsPage from "./components/Pages/AllProductsPage";
import ToolEquipmentPage from "./components/Pages/ToolEquimentPage";
import MainPage from "./components/Pages/MainPage";
import Layout from "./components/Layout";

export default function App() {
  return (
    <div className="app_wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/sales" element={<DiscountsPage />} />
          <Route path="/categories/:name" element={<ToolEquipmentPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
