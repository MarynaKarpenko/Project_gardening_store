import React from "react";
import ProductItem from "../ProductsItem";

export default function ProductsContainer({ products }) {
  return (
    <div>
      {products &&
        products.map((item) => <ProductItem key={item.id} {...item} />)}
    </div>
  );
}
