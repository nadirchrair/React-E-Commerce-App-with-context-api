
import { type1 } from "../actions/bank-actions"
import { type2 } from "../actions/bank-actions"
export const bankreducer = (state = 1000, action) => {
    switch (action.type) {
        case type1:
            return state - action.payload
        case type2:
            return state + action.payload



        default:
            return state
            break;
    }

}