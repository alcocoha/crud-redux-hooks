import { combineReducers } from 'redux';
import productsReducer from './products-reducer';
import validateForm from './validation-reducer';

export default combineReducers({
    productsReducer,
    validateForm
});