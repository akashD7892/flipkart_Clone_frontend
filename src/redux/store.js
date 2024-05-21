import { combineReducers, createStore, applyMiddleware } from 'redux' ;

import thunk from 'redux-thunk' ;
import {composeWithDevTools} from 'redux-devtools-extension' ;
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer' ;

import storage from 'redux-persist/lib/storage' ;
import {persistReducer} from 'redux-persist' ;
import {configureStore } from '@reduxjs/toolkit'
//takes object 
const reducers = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart:cartReducer
})

const middleware = [thunk] ;

//Redux persist library 
const persistConfig = {
    key:'root' ,
    version:1 ,
    storage
} 

const persistedStorage = persistReducer( persistConfig, reducers) ; 

const store = configureStore({
    reducer:persistedStorage
})
// takes two argument reducers and middleware
// const store = createStore(
//      reducers,
//      composeWithDevTools( applyMiddleware(...middleware) ) 
// )

export default store ;