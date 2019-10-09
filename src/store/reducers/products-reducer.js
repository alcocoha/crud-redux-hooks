import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";

const initialState = {
  products: [],
  error: false,
  loading: false,
  errorMessage: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false
      };
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: action.payload
      };
    default:
      return state;
  }
}
