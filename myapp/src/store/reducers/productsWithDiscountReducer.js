const LOAD_PRODUCTS = "[ALL_SALES_PAGE] LOAD_PRODUCTS";

const FILTER_BY_PRICE = "ALL_SALES_PAGE] FILTER_BY_PRICE";
const PRODUCTS_SORT = "[ALL_SALES_PAGE]PRODUCTS_SORT";

export const loadProductsAction = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
});

export const filterByPriceAction = (payload) => ({
  type: FILTER_BY_PRICE,
  payload,
});

export const sortProductsAction = (payload) => ({
  type: PRODUCTS_SORT,
  payload,
});

export const productsWithDiscountReducer = (state = [], action) => {
  if (action.type === LOAD_PRODUCTS) {
    return action.payload;
  } else if (action.type === FILTER_BY_PRICE) {
    const { min_value, max_value } = action.payload;
    return state.map((el) => {
      if (el.discont_price >= min_value && el.discont_price <= max_value) {
        el.show_by_price = true;
      } else {
        el.show_by_price = false;
      }
      return el;
    });
  } else if (action.type === PRODUCTS_SORT) {
    if (+action.payload === 1) {
      state.sort((a, b) => a.discont_price - b.discont_price);
    } else if (+action.payload === 2) {
      state.sort((a, b) => b.discont_price - a.discont_price);
    } else if (+action.payload === 3) {
      state.sort((a, b) => a.title.localeCompare(b.title));
    }
    return [...state];
  } else {
    return state;
  }
};
