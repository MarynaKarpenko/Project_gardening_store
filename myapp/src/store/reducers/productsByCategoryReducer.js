const LOAD_PRODUCTS_BY_CATEGORY =
  "[PRODUCTS_BY_CATEGORY_PAGE] LOAD_PRODUCTS_BY_CATEGORY";

const PRODUCTS_WITH_DISCOUNT =
  "[PRODUCTS_BY_CATEGORY_PAGE]PRODUCTS_WITH_DISCOUNT";
const PRODUCTS_SORT = "[PRODUCTS_BY_CATEGORY_PAGE] PRODUCTS_SORT";
const FILTER_BY_PRICE = "[PRODUCTS_BY_CATEGORY_PAGE] FILTER_BY_PRICE";

const realPrice = ({ price, discont_price }) => {
  if (discont_price === null) {
    return price;
  } else {
    return discont_price;
  }
};

export const loadProductsByCategoryAction = (payload) => ({
  type: LOAD_PRODUCTS_BY_CATEGORY,
  payload,
});
export const productsWithDiscountAction = (payload) => ({
  type: PRODUCTS_WITH_DISCOUNT,
  payload,
});
export const sortProductsAction = (payload) => ({
  type: PRODUCTS_SORT,
  payload,
});

export const filterByPriceAction = (payload) => ({
  type: FILTER_BY_PRICE,
  payload,
});

export const productsByCategoryReducer = (state = [], action) => {
  if (action.type === LOAD_PRODUCTS_BY_CATEGORY) {
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
  } else if (action.type === PRODUCTS_SORT) {
    if (+action.payload === 1) {
      state.sort((a, b) => realPrice(a) - realPrice(b));
    } else if (+action.payload === 2) {
      state.sort((a, b) => realPrice(b) - realPrice(a));
    } else if (+action.payload === 3) {
      state.sort((a, b) => a.title.localeCompare(b.title));
    }
    return [...state];
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
  } else {
    return state;
  }
};
