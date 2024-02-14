import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./SingleProduct.module.css";
import Breadcrumbs from "../../UI/breadcrumbs/Breadcrumbs";
import ProductInformation from "../productInformation/ProductInformation";
import ProductImage from "../productImage/ProductImage";
import { fechSingleProduct } from "../../../Async/request";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fechSingleProduct(productId));
  }, []);

  const product = useSelector((state) => state.singleProduct);

  const breadcrumbs = [
    { label: "Main page", path: "/" },
    { label: "Categories", path: "/categories" },
    { label: "All products", path: "/products" },
    { label: `${product.length && product[0].title}`, path: `/product/${productId}`, active: true },
  ];

  return (
    <>
      {product.length &&
        product.map((el) => (
          <div key={el.id} className={s.product_wrapper}>
            <div className={s.btn_container}>
              <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>
            <h3 className={s.title_480}>{el.title}</h3>
            <div className={s.container}>
              <ProductImage el={el} />
              <ProductInformation el={el} />
            </div>
            <div className={s.description2}>
              <h3>Description</h3>
              <p>{el.description}</p>
            </div>
          </div>
        ))}
    </>
  );
}
