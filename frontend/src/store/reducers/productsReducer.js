import {
  LOAD_ALL_PRODUCTS,
  LOAD_PRODUCTS,
  PRODUCTS_WITH_DISCOUNT_ALL,
  PRODUCTS_WITH_DISCOUNT_CATEGORY,
  FILTER_BY_PRICE_ALL,
  FILTER_BY_PRICE_DISCOUNTS,
  FILTER_BY_PRICE_CATEGORY,
  PRODUCTS_SORT_ALL,
  PRODUCTS_SORT_DISCOUNTS,
  PRODUCTS_SORT_CATEGORY,
  LOAD_PRODUCTS_BY_CATEGORY,
} from "../actions/actions";

const realPrice = ({ price, discont_price }) =>
  discont_price === null ? price : discont_price;

// const realDiscountPrice = ({ discont_price }) => discont_price;

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_PRODUCTS:
    case LOAD_PRODUCTS_BY_CATEGORY:
    case LOAD_PRODUCTS:
      return action.payload;

    case PRODUCTS_WITH_DISCOUNT_ALL:
    case PRODUCTS_WITH_DISCOUNT_CATEGORY:
      return state.map((el) => ({
        ...el,
        show_by_discount: action.payload ? el.discont_price !== null : true,
      }));

    case FILTER_BY_PRICE_ALL:
    case FILTER_BY_PRICE_CATEGORY:
    case FILTER_BY_PRICE_DISCOUNTS:
      const { min_value, max_value } = action.payload;
      return state.map((el) => ({
        ...el,
        show_by_price: el.price >= min_value && el.price <= max_value,
      }));

    case PRODUCTS_SORT_ALL:
    case PRODUCTS_SORT_CATEGORY:
    case PRODUCTS_SORT_DISCOUNTS:
      return [...state].sort((a, b) => {
        switch (+action.payload) {
          case 0: 
          return state;
          case 1:
            return realPrice(a) - realPrice(b);
          case 2:
            return realPrice(b) - realPrice(a);
          case 3:
            return a.title.localeCompare(b.title);
          case 4:
            return b.title.localeCompare(a.title);
          case 5:
            return new Date(b.createdAt) - new Date(a.createdAt);
          default:
            return 0;
        }
      });
    default:
      return state;
  }
};
