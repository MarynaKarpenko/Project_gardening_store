import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSalesProducts } from "../../../asyncActions/products";
import { filterByPriceAction, sortProductsAction } from "../../../store/actions/actions";
import Breadcrumbs from "../../UI/breadcrumbs/Breadcrumbs";
import Filter from "../../UI/filters/MainFilter";
import ProductsContainer from "../../productsComponents/productsContainer/ProductsContainer";
import s from "./DiscountsPage.module.css";

export default function DiscountsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSalesProducts);
  }, []);
  const products = useSelector((state) => state.productsWithDiscount);

  const filterByPrice = (e) => {
    e.preventDefault();
    const { min_price, max_price } = e.target.parentElement;
    const min_value = min_price.value || 0;
    const max_value = max_price.value || Infinity;
    dispatch(filterByPriceAction({ min_value, max_value }));
  };

  const sort = (e) => {
    dispatch(sortProductsAction(e.target.value));
  };

  const breadcrumbs = [
    { label: "Main page", path: "/" },
    { label: "All sales", path: "/sales", active: true },
  ];

  return (
    <div className={s.discounted_wrapper}>
      <div className={s.btn_container}>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
      <h1 className={s.products_name}>Discounted items</h1>
      <Filter sale={true} filterByPrice={filterByPrice} sort={sort} />
      <ProductsContainer products={products} />
    </div>
  );
}
