import { useEffect, useState } from "react";
import ProductsContainer from "../../ProductsContainer";
import s from "./AllProductsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/actions/actions";

export default function AllProductsPage() {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);

  

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const all_products_state = useSelector((state) => state.allProducts);

  return (
    <div>
      <h1>All Products</h1>
      <ProductsContainer products={all_products_state} />
    </div>
  );
}