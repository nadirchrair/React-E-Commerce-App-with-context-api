import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './slices/Card-slice'
import categoryReducer from './slices/Category-slice'
import productReducer from './slices/products'
export const store = configureStore({
    reducer: {
        product: productReducer,
        card: cardReducer,
        category: categoryReducer

    },
})