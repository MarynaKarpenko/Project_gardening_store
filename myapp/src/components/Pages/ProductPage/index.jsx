import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {fechSingleProduct} from "../../../Async/request"
import SingleProduct from "../../SingleProduct";


export default function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fechSingleProduct(productId));
  }, []);
  const product = useSelector((state) => state.singleProduct);
  return (
    <div>
      <h1>Product Page</h1>
      {Array.isArray(product) && product.length > 0 ? (
        product.map((item) => <SingleProduct key={item.id} {...item} />)
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
}
