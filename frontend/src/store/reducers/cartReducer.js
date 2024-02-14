import {
  loadCart,
  saveCart,
} from "../../components/cartComponents/cartLocalStorage/CartLocalStorage";

const initialState = loadCart();

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_CART = "REMOVE_CART";
const CART_INCREMENT = "INCREMENT";
const CART_DECREMENT = "CART_DECREMENT";
const SEND_ORDER = "SEND_ORDER ";

const checkProduct = (state, payload) => {
  const target_product = state.find((el) => el.id === payload.id);

  if (target_product) {
    target_product.count++;
    return [...state];
  } else {
    return [...state, { ...payload, count: 1 }];
  }
};

// export const cartReducer = (state = [], action) => {
//   if (action.type === ADD_TO_CART) {
//     return checkProduct(state, action.payload);
//   } else if (action.type === REMOVE_CART) {
//     return state.filter(({ id }) => id !== action.payload);
//   } else if (action.type === CART_INCREMENT) {
//     const updatedState = state.map((item) =>
//       item.id === action.payload && item.count !== undefined
//         ? { ...item, count: (item.count || 0) + 1 }
//         : item
//     );
//     return updatedState;
//   } else if (action.type === CART_DECREMENT) {
//     const product = state.find(({ id }) => id === action.payload);
//     if (product && product.count === 1) {
//       return state.filter((item) => item !== product);
//     } else if (product) {
//       product.count--;
//       return [...state];
//     } else {
//       return state;
//     }
//   } else if (action.type === SEND_ORDER) {
//     return [];
//   } else {
//     return state;
//   }
// };

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newStateAfterAdd = checkProduct(state, action.payload);
      saveCart(newStateAfterAdd);
      return newStateAfterAdd;
    case REMOVE_CART:
      const newStateAfterRemove = state.filter(
        ({ id }) => id !== action.payload
      );
      saveCart(newStateAfterRemove);
      return newStateAfterRemove;
    case CART_INCREMENT:
      const updatedStateIncrement = state.map((item) =>
        item.id === action.payload && item.count !== undefined
          ? { ...item, count: (item.count || 0) + 1 }
          : item
      );
      saveCart(updatedStateIncrement);
      return updatedStateIncrement;
    case CART_DECREMENT:
      const updatedStateDecrement = state.map((item) => {
        if (item.id === action.payload) {
          const updatedItem = { ...item };
          updatedItem.count = Math.max((item.count || 0) - 1, 0);
          return updatedItem;
        }
        return item;
      });
      saveCart(updatedStateDecrement);
      return updatedStateDecrement;
    case SEND_ORDER:
      saveCart([]);
      return [];
    default:
      return state;
  }
};

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
