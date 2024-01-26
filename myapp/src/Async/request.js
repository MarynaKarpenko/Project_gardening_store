import { loadAllProductsAction } from "../components/store/reducers/allProductsReduser";
import { loadProductsByCategoryAction } from "../components/store/reducers/toolEquiment";

const BASE_URL = "http://localhost:3333";

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories/all`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export const fetchProductsByCategory = async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/categories/:id`);
    const data = await response.json();
    dispatch(loadProductsByCategoryAction(data));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const fetchAllProducts = async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}/products/all`);
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
