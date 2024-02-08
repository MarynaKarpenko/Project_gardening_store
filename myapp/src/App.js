import { Routes, Route } from "react-router-dom";
import "./App.css";
import CategoriesPage from "./components/Pages/categoriesPage/CategoriesPage";
import DiscountsPage from "./components/Pages/discountsPage/DiscountsPage";
import NotFoundPage from "./components/Pages/notFoundPage/NotFoundPage";
import ProductPage from "./components/Pages/productPage/ProductPage";
import CartPage from "./components/Pages/cartPage/CartPage";
import AllProductsPage from "./components/Pages/allProductsPage/AllProductsPage";
import ToolEquipmentPage from "./components/Pages/toolEquimentPage/ToolEquimentPage";
import MainPage from "./components/Pages/mainPage/MainPage";
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
