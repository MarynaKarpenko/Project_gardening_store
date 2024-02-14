import React from "react";
import ProductItem from "../productsItem/ProductsItem";
import s from "./ProductsContainer.module.css";

export default function ProductsContainer({ products }) {
  return (
    <div className={s.products_container}>
      {products
        .filter((el) => el.show_by_discount && el.show_by_price)
        .map((item) => (
          <ProductItem key={item.id} el={item} />
        ))}
    </div>
  );
}
