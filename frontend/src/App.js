import { Routes, Route } from "react-router-dom";
import "./App.css";
import CategoriesPage from "./components/pages/categoriesPage/CategoriesPage";
import DiscountsPage from "./components/pages/discountsPage/DiscountsPage";
import NotFoundPage from "./components/pages/notFoundPage/NotFoundPage";
import ProductPage from "./components/pages/productPage/ProductPage";
import CartPage from "./components/pages/cartPage/CartPage";
import AllProductsPage from "./components/pages/allProductsPage/AllProductsPage";
import ToolEquipmentPage from "./components/pages/toolEquipmentPage/ToolEquipmentPage";
import MainPage from "./components/pages/mainPage/MainPage";
import Layout from "./components/layout/Layout";

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
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}
