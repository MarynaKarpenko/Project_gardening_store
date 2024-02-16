import {
  loadCart,
  saveCart,
} from "../../components/cartComponents/cartLocalStorage/CartLocalStorage";
import {
  ADD_TO_CART,
  REMOVE_CART,
  CART_INCREMENT,
  CART_DECREMENT,
  SEND_ORDER,
} from "../actions/actions";

const initialState = loadCart();

const checkProduct = (state, payload) => {
  const index = state.findIndex((el) => el.id === payload.id);

  if (index !== -1) {
    const updatedState = [...state];
    updatedState[index].count++;
    return updatedState;
  } else {
    return [...state, { ...payload, count: 1 }];
  }
};

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
          ? { ...item, count: (item.count || 1) + 1 }
          : item
      );
      saveCart(updatedStateIncrement);
      return updatedStateIncrement;
    case CART_DECREMENT:
      const updatedStateDecrement = state.map((item) => {
        if (item.id === action.payload) {
          const updatedItem = { ...item };
          updatedItem.count = Math.max((item.count || 1) - 1);
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
