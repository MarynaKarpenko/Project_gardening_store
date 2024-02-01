const LOAD_ALL_PRODUCTS = "[ALL_PRODUCTS_PAGE] LOAD_ALL_PRODUCTS";
const PRODUCTS_WITH_DISCOUNT_ALL = "[ALL_PRODUCTS_PAGE] PRODUCTS_WITH_DISCOUNT";
const FILTER_BY_PRICE_ALL = "[ALL_PRODUCTS_PAGE] FILTER_BY_PRICE";
const PRODUCTS_SORT_ALL = "[ALL_PRODUCTS_PAGE] PRODUCTS_SORT";

const LOAD_PRODUCTS_BY_CATEGORY = "[CATEGORIES_PAGE] LOAD_PRODUCTS_BY_CATEGORY";
const PRODUCTS_WITH_DISCOUNT_CATEGORY =
  "[CATEGORIES_PAGE] PRODUCTS_WITH_DISCOUNT";
const PRODUCTS_WITH_DISCOUNT = "[CATEGORIES_PAGE] PRODUCTS_WITH_DISCOUNT";
const PRODUCTS_SORT_CATEGORY = "[CATEGORIES_PAGE] PRODUCTS_SORT_CATEGORY";
const FILTER_BY_PRICE_CATEGORY = "[CATEGORIES_PAGE] FILTER_BY_PRICE";

const LOAD_PRODUCTS = "[DISCOUNTS_PAGE] LOAD_PRODUCTS";
const FILTER_BY_PRICE_DISCOUNTS = "[DISCOUNTS_PAGE] FILTER_BY_PRICE";
const PRODUCTS_SORT_DISCOUNTS = "[DISCOUNTS_PAGE] PRODUCTS_SORT_DISCOUNTS";

const realPrice = ({ price, discont_price }) => {
  if (discont_price === null) {
    return price;
  } else {
    return discont_price;
  }
};

const realDiscountPrice = ({ discont_price }) => discont_price;

export const productsReducer = (state = [], action) => {
  switch (action.type) {
    // All Products Page Actions
    case LOAD_ALL_PRODUCTS:
      return action.payload;

    case PRODUCTS_WITH_DISCOUNT_ALL:
      return state.map((el) => ({
        ...el,
        show_by_discount: action.payload ? el.discont_price !== null : true,
      }));

    case FILTER_BY_PRICE_ALL:
      const { min_value: minValAll, max_value: maxValAll } = action.payload;
      return state.map((el) => ({
        ...el,
        show_by_price: el.price >= minValAll && el.price <= maxValAll,
      }));

    case PRODUCTS_SORT_ALL:
      const sortedStateAll = [...state];
      if (+action.payload === 1) {
        sortedStateAll.sort((a, b) => realPrice(a) - realPrice(b));
      } else if (+action.payload === 2) {
        sortedStateAll.sort((a, b) => realPrice(b) - realPrice(a));
      } else if (+action.payload === 3) {
        sortedStateAll.sort((a, b) => a.title.localeCompare(b.title));
      }
      return sortedStateAll;

    // Categories Page Actions
    case LOAD_PRODUCTS_BY_CATEGORY:
      return action.payload;

    case PRODUCTS_WITH_DISCOUNT_CATEGORY:
      return state.map((el) => ({
        ...el,
        show_by_discount: action.payload ? el.discont_price !== null : true,
      }));

    case PRODUCTS_SORT_CATEGORY:
      return [...state].sort((a, b) => {
        if (+action.payload === 1) return realPrice(a) - realPrice(b);
        if (+action.payload === 2) return realPrice(b) - realPrice(a);
        if (+action.payload === 3) return a.title.localeCompare(b.title);
        return 0;
      });

    case FILTER_BY_PRICE_CATEGORY:
      const { min_value: minValCat, max_value: maxValCat } = action.payload;
      return state.map((el) => ({
        ...el,
        show_by_price: el.price >= minValCat && el.price <= maxValCat,
      }));

    // Discounts Page Actions
    case LOAD_PRODUCTS:
      return action.payload;

    case FILTER_BY_PRICE_DISCOUNTS:
      const { min_value: minValDis, max_value: maxValDis } = action.payload;
      return state.map((el) => ({
        ...el,
        show_by_price:
          el.discont_price >= minValDis && el.discont_price <= maxValDis,
      }));

    case PRODUCTS_SORT_DISCOUNTS:
      return [...state].sort((a, b) => {
        if (+action.payload === 1)
          return realDiscountPrice(a) - realDiscountPrice(b);
        if (+action.payload === 2)
          return realDiscountPrice(b) - realDiscountPrice(a);
        if (+action.payload === 3) return a.title.localeCompare(b.title);
        return 0;
      });
    default:
      return state;
  }
};

export const loadAllProductsAction = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
});

export const loadProductsByCategoryAction = (payload) => ({
  type: LOAD_PRODUCTS_BY_CATEGORY,
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


