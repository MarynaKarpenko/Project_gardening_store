export const LOAD_ALL_PRODUCTS = "LOAD_ALL_PRODUCTS";
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const PRODUCTS_WITH_DISCOUNT_ALL = "PRODUCTS_WITH_DISCOUNT";
export const PRODUCTS_WITH_DISCOUNT = "PRODUCTS_WITH_DISCOUNT";
export const PRODUCTS_WITH_DISCOUNT_CATEGORY = "PRODUCTS_WITH_DISCOUNT";
export const FILTER_BY_PRICE_ALL = "FILTER_BY_PRICE";
export const FILTER_BY_PRICE_DISCOUNTS = "FILTER_BY_PRICE";
export const FILTER_BY_PRICE_CATEGORY = "FILTER_BY_PRICE";
export const PRODUCTS_SORT_ALL = "PRODUCTS_SORT";
export const PRODUCTS_SORT_DISCOUNTS = "PRODUCTS_SORT_DISCOUNTS";
export const PRODUCTS_SORT_CATEGORY = "PRODUCTS_SORT_CATEGORY";
export const LOAD_PRODUCTS_BY_CATEGORY = "LOAD_PRODUCTS_BY_CATEGORY";
export const LOAD_CATEGORIES = "LOAD_CATEGORIES";
export const LOAD_NAME = "LOAD_NAME";
export const LOAD_SINGLE_PRODUCT = "LOAD_SINGLE_PRODUCT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_CART = "REMOVE_CART";
export const CART_INCREMENT = "INCREMENT";
export const CART_DECREMENT = "CART_DECREMENT";
export const SEND_ORDER = "SEND_ORDER ";

export const loadAllProductsAction = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
});

export const loadProductsAction = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
});

export const allProductsWithDiscountAction = (payload) => ({
  type: PRODUCTS_WITH_DISCOUNT_ALL,
  payload,
});

export const productsWithDiscountAction = (payload) => ({
  type: PRODUCTS_WITH_DISCOUNT,
  payload,
});

export const filterByPriceAction = (payload) => ({
  type: FILTER_BY_PRICE_ALL,
  payload,
});

export const sortProductsAction = (payload) => ({
  type: PRODUCTS_SORT_DISCOUNTS,
  payload,
});

export const loadCategoriesAction = (payload) => ({
  type: LOAD_CATEGORIES,
  payload,
});

export const loadProductsByCategoryAction = (payload) => ({
  type: LOAD_PRODUCTS_BY_CATEGORY,
  payload,
});

export const loadNameOfCategoryAction = (payload) => ({
  type: LOAD_NAME,
  payload,
});

export const loadSingleProductAction = (payload) => ({
  type: LOAD_SINGLE_PRODUCT,
  payload,
});

export const addToCartAction = (payload) => ({
  type: ADD_TO_CART,
  payload,
});

export const removeCartAction = (payload) => ({
  type: REMOVE_CART,
  payload,
});

export const cartIncrAction = (payload) => ({ type: CART_INCREMENT, payload });

export const cartDecrAction = (payload) => ({ type: CART_DECREMENT, payload });

export const sendOrderAction = (payload) => ({
  type: SEND_ORDER,
  payload,
});
