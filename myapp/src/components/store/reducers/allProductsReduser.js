const LOAD_ALL_PRODUCTS = "[ALL_PRODUCTS_PAGE]  LOAD_ALL_PRODUCTS";
const PRODUCTS_WITH_DISCOUNT = "[ALL_PRODUCTS_PAGE]PRODUCTS_WITH_DISCOUNT";

const FILTER_BY_PRICE = "[ALL_PRODUCTS_PAGE] FILTER_BY_PRICE";
const PRODUCTS_SORT = "[ALL_PRODUCTS_PAGE]PRODUCTS_SORT";

export const loadAllProductsAction = (payload) => ({
  type: LOAD_ALL_PRODUCTS,
  payload,
});

export const allProductsWithDiscountAction = (payload) => ({
  type: PRODUCTS_WITH_DISCOUNT,
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

const realPrice = ({ price, discont_price }) => {
  if (discont_price === null) {
    return price;
  } else {
    return discont_price;
  }
};

export const allProductsReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_PRODUCTS) {
    return action.payload;
  } else if (action.type === PRODUCTS_WITH_DISCOUNT) {
    if (action.payload) {
      return state.map((el) => {
        if (el.discont_price !== null) {
          el.show_by_discount = true;
        } else {
          el.show_by_discount = false;
        }
        return el;
      });
    } else {
      return state.map((el) => {
        el.show_by_discount = true;
        return el;
      });
    }
  } else if (action.type === FILTER_BY_PRICE) {
    const { min_value, max_value } = action.payload;
    return state.map((el) => {
      if (el.price >= min_value && el.price <= max_value) {
        el.show_by_price = true;
      } else {
        el.show_by_price = false;
      }
      return el;
    });
  } else if (action.type === PRODUCTS_SORT) {
    if (+action.payload === 1) {
      state.sort((a, b) => realPrice(a) - realPrice(b));
    } else if (+action.payload === 2) {
      state.sort((a, b) => realPrice(b) - realPrice(a));
    } else if (+action.payload === 3) {
      state.sort((a, b) => a.title.localeCompare(b.title));
    }
    return [...state];
  } else {
    return state;
  }
};
