import React from "react";
import s from "./CategoryItem.module.css";
import {BASE_URL} from "../../config";
import { Link } from "react-router-dom";

export default function CategoryItem({ id, title, image }) {

  return (
    <div className={s.cart}>
      <Link to={`/categories/${id}`} className={s.item}>
        <img src={`${BASE_URL}/${image}`} alt={title} />
        <p>{title}</p>
      </Link>
    </div>
  );
}
