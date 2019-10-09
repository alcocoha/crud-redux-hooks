import { ADD_PRODUCT, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_ERROR } from "../types";
import { clientPost } from '../../api'; 

export default function createProductAction(product) {
  return dispatch => {
    dispatch( addProduct() );
    clientPost( 'productos', product )
        .then( resp => dispatch( addProductSuccess( resp ) ) )
        .catch( () => dispatch( addProductError(' No se pudo agregar producto ') ) );
  };
}

const addProduct = () => ({
  type: ADD_PRODUCT
});

const addProductSuccess = payload => ({
  type: ADD_PRODUCT_SUCCESS,
  payload
});

const addProductError = payload => ({
  type: ADD_PRODUCT_ERROR,
  payload
});
