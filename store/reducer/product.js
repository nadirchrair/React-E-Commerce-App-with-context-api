import { getproduit, show } from "../actions/product"
export const Productreducer = (state = [], action) => {
    switch (action.type) {
        case getproduit:
            return [...state, ...action.payload]
        case show:
            return [...state, action.payload]
        default:
            return state
    }
}