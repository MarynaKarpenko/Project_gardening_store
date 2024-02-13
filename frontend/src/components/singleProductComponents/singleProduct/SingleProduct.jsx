import React from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../../store/reducers/cartReducer";
import s from "./SingleProduct.module.css";
import Breadcrumbs from "../../UI/breadcrumbs/Breadcrumbs";
import ProductInformation from "../productInformation/ProductInformation";
import ProductImage from "../productImage/ProductImage";

export default function SingleProduct({
  id,
  title,
  price,
  discont_price,
  description,
  image,
  count,
}) {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(
      addToCartAction({
        id,
        title,
        price,
        discont_price,
        image,
      })
    );
  };

  const breadcrumbs = [
    { label: "Main page", path: "/" },
    { label: "Categories", path: "/categories" },
    { label: "All products", path: "/products" },
    { label: `${title}`, path: `/product/${id}`, active: true },
  ];

  return (
    <div className={s.product_wrapper}>
      <div className={s.btn_container}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <h3 className={s.title_480}>{title}</h3>
      <div className={s.container}>
        <ProductImage id={id} title={title} image={image} />
        <ProductInformation
          title={title}
          price={price}
          discont_price={discont_price}
          description={description}
          handleAddToCart={handleAddToCart}
          count={count}
          id={id}
        />
      </div>
      <div className={s.description2}>
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
