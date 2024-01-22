import { loadAllProductsAction } from "../reducers/allProductsReduser";

const BASE_URL = "http://localhost:3333";

export const getCategories = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}/categories/all`);
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };
};

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const link = `${BASE_URL}/products/all`;
      const response = await fetch(link);
      const data = await response.json();
      const new_data = data.map((el) => ({
        ...el,
        show_by_price: true,
        show_by_discount: true,
      }));
      dispatch(loadAllProductsAction(new_data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};