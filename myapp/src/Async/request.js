import {BASE_URL} from "../config"
import {
  loadAllProductsAction,
  loadProductsByCategoryAction,
  loadProductsAction,
} from "../store/reducers/productsReducer";
import { sendOrderAction } from "../store/reducers/cartReducer";
import { loadCategoriesAction } from "../store/reducers/categoriesReducer";
import { loadNameOfCategoryAction } from "../store/reducers/categoryReducer";
import { loadSingleProductAction } from "../store/reducers/singleProductReducer";

export const fechCategories = async (dispatch) => {
  const link = `${BASE_URL}/categories/all`;
  const resp = await fetch(link);
  const data = await resp.json();
  dispatch(loadCategoriesAction(data));
};

export const fechProductsByCategory = (element) => {
  return (dispatch) =>
    fetch(`${BASE_URL}/categories/${element}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.data) {
          const data = json.data.map((el) => ({
            ...el,
            show_by_price: true,
            show_by_discount: true,
          }));
          json.data = data;
          dispatch(loadProductsByCategoryAction(json.data));
        } else {
          console.error("Data is undefined or null");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
};

export const fechNameOfCategory = (element) => {
  return (dispatch) =>
    fetch(`${BASE_URL}/categories/${element}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadNameOfCategoryAction(json.category)));
};

export const fechAllProducts = async (dispatch) => {
  const link = `${BASE_URL}/products/all`;
  const resp = await fetch(link);
  const data = await resp.json();
  const new_data = data.map((el) => ({
    ...el,
    show_by_price: true,
    show_by_discount: true,
  }));
  dispatch(loadAllProductsAction(new_data));
};

export const fechSalesProducts = async (dispatch) => {
  const link = `${BASE_URL}/products/all`;
  const resp = await fetch(link);
  const data = await resp.json();
  const new_data = data
    .filter((el) => el.discont_price !== null)
    .map((el) => ({
      ...el,
      show_by_price: true,
      show_by_discount: true,
    }));
  dispatch(loadProductsAction(new_data));
};

export const fechSingleProduct = (element) => {
  return (dispatch) =>
    fetch(`${BASE_URL}/products/${element}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadSingleProductAction(json)));
};

export const sendOrder = (body) => {
  return (dispatch) => {
    fetch(`${BASE_URL}/order/send`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((json) => dispatch(sendOrderAction(json)))
      .then(alert("order is accepted"));
  };
};

export const getDiscount = (body) => {
  fetch(`${BASE_URL}/sale/send`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  })
    .then((res) => res.json())
    .then(alert("your discount is 5%"));
};

