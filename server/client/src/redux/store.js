import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { cartReducer } from './reducer/cartReducer';
import {  getProductReducer,getProductDetailsReducer } from './reducer/productReducer';

const reducer = combineReducers({
    
    getProducts: getProductReducer,
    getProductDetails: getProductDetailsReducer,
    cart:cartReducer

})


const middleware = [thunk];
    
const store = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;