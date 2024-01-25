const LOAD_ALL_PRODUCTS = "[ALL_PRODUCTS_PAGE] LOAD_ALL_PRODUCTS";
const TOGGLE_DISCOUNT = "[ALL_PRODUCTS_PAGE] TOGGLE_DISCOUNT";
const FILTER_BY_PRICE = "[ALL_PRODUCTS_PAGE] FILTER_BY_PRICE";
const SORT_PRODUCTS = "[ALL_PRODUCTS_PAGE] SORT_PRODUCTS";

export const loadAllProductsAction = (payload) => ({
  type: LOAD_ALL_PRODUCTS,
  payload,
});

export const toggleDiscountAction = (payload) => ({
  type: TOGGLE_DISCOUNT,
  payload,
});

export const filterByPriceAction = (payload) => ({
  type: FILTER_BY_PRICE,
  payload,
});

export const sortProductsAction = (payload) => ({
  type: SORT_PRODUCTS,
  payload,
});

const calculateRealPrice = ({ price, discount_price }) => {
  if (discount_price === null) {
    return price;
  } else {
    return discount_price;
  }
};

export const allProductsReducer = (state = [], action) => {
  if (action.type === LOAD_ALL_PRODUCTS) {
    return action.payload;
  } else if (action.type === TOGGLE_DISCOUNT) {
    if (action.payload) {
      return state.map((el) => {
        if (el.discount_price !== null) {
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
  } else if (action.type === SORT_PRODUCTS) {
    if (+action.payload === 1) {
      return [...state].sort(
        (a, b) => calculateRealPrice(a) - calculateRealPrice(b)
      );
    } else if (+action.payload === 2) {
      return [...state].sort(
        (a, b) => calculateRealPrice(b) - calculateRealPrice(a)
      );
    } else if (+action.payload === 3) {
      return [...state].sort((a, b) => a.title.localeCompare(b.title));
    }
  } else {
    return state;
  }
};
