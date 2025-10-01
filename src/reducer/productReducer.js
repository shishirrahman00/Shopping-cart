import { ADD_TO_CART, GET_PRODUCTS } from "../action/action";

export const productReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        productCart: [...state.productCart, action.payload],
      };

    default:
      return state;
  }
};
