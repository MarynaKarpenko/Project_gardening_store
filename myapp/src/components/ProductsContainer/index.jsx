import React from "react";
import ProductItem from "../ProductsItem";
import s from "./ProductsContainer.module.css";

export default function ProductsContainer({ products }) {
  return (
    <div className={s.products_container}>
      {products &&
        products.map((item) => <ProductItem key={item.id} {...item} />)}
    </div>
  );
}
