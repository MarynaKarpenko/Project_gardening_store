import React from "react";
import { Link } from "react-router-dom";

const BASE_URL = "http://localhost:3333";

export default function ProductItem({
  id,
  title,
  price,
  discont_price,
  description,
  image,
}) {
  return (
    <div>
      <Link to={`/product/${id}`}>
        <img src={`${BASE_URL}${image}`} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Price: ${price}</p>
        {discont_price && <p>Discounted Price: ${discont_price}</p>}
      </Link>
    </div>
  );
}
