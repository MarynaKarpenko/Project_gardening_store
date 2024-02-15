import { BASE_URL } from "../config";
import {
  loadAllProductsAction,
  loadProductsAction,
  loadCategoriesAction,
  loadProductsByCategoryAction,
  loadNameOfCategoryAction,
  loadSingleProductAction,
  sendOrderAction,
} from "../store/actions/actions";
import { saveCart } from "../components/cartComponents/cartLocalStorage/CartLocalStorage";

export const fetchCategories = async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/categories/all`);
    const data = await response.json();
    dispatch(loadCategoriesAction(data));
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export const fetchProductsByCategory = (element) => {
  return (dispatch) => {
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
        console.error("Error fetching products by category:", error);
      });
  };
};

export const fetchNameOfCategory = (element) => {
  return (dispatch) => {
    fetch(`${BASE_URL}/categories/${element}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadNameOfCategoryAction(json.category)))
      .catch((error) => {
        console.error("Error fetching name of category:", error);
      });
  };
};

export const fetchAllProducts = async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/products/all`);
    const data = await response.json();
    const newData = data.map((el) => ({
      ...el,
      show_by_price: true,
      show_by_discount: true,
    }));
    dispatch(loadAllProductsAction(newData));
  } catch (error) {
    console.error("Error fetching all products:", error);
  }
};

export const fetchSalesProducts = async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/products/all`);
    const data = await response.json();
    const newData = data
      .filter((el) => el.discont_price !== null)
      .map((el) => ({
        ...el,
        show_by_price: true,
        show_by_discount: true,
      }));
    dispatch(loadProductsAction(newData));
  } catch (error) {
    console.error("Error fetching sales products:", error);
  }
};

export const fetchSingleProduct = (element) => {
  return (dispatch) => {
    fetch(`${BASE_URL}/products/${element}`)
      .then((res) => res.json())
      .then((json) => dispatch(loadSingleProductAction(json)))
      .catch((error) => {
        console.error("Error fetching single product:", error);
      });
  };
};

export const getDiscount = async (body) => {
  try {
    const response = await fetch(`${BASE_URL}/sale/send`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
    if (response.ok) {
      alert("Your discount is 5%");
    } else {
      throw new Error("Failed to get discount");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const sendOrder = (body) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/order/send`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const data = await response.json();
      dispatch(sendOrderAction(data));
      alert("Order is accepted");

      saveCart([]);
    } catch (error) {
      console.error("Error sending order:", error);
    }
  };
};
