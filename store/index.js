import { createStore, combineReducers } from 'redux';
import { bankreducer } from './reducer/bank-reducer';
import { Productreducer } from './reducer/product';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const app = combineReducers({
    bank: bankreducer,
    product: Productreducer
})
export const store = createStore(app, applyMiddleware(thunk));
