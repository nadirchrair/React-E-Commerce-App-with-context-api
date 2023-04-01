import { configureStore } from '@reduxjs/toolkit'
import BankReducer from './Slices/bank-slice'
import ProductReducer from './Slices/product-slice'
export const store = configureStore({
    reducer: {
        bank: BankReducer,
        product: ProductReducer,
    },
})