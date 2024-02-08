import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fechSingleProduct } from "../../../Async/request";
import SingleProduct from "../../singleProduct/SingleProduct";

export default function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch(fechSingleProduct(productId));
  }, []);

  return (
    <div>
      {product.map((item) => (
        <SingleProduct key={item.id} {...item} />
      ))}
    </div>
  );
}
