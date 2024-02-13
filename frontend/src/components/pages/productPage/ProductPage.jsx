import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fechSingleProduct } from "../../../Async/request";
import SingleProduct from "../../singleProductComponents/singleProduct/SingleProduct";

export default function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.singleProduct);
  useEffect(() => {
    dispatch(fechSingleProduct(productId));
  }, []);

  return (
    <div>
      {product.map((el) => (
        <SingleProduct key={el.id} {...el} />
      ))}
    </div>
  );
}
