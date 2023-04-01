import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    initialState: {
        items: localStorage.getItem('card') ? JSON.parse(localStorage.getItem('card')) : [],

    },
    name: 'CartSlice',
    reducers: {
        AddToCart: (state, action) => {
            const findPRODUCT = state.items.find((cart) => cart.id === action.payload.id)
            if (findPRODUCT) {
                findPRODUCT.quantity += 1;
            }
            else {
                const productclone = { ...action.payload, quantity: 1 }
                state.items.push(productclone);





                
            }
            localStorage.setItem('card', JSON.stringify(state.items.
                map((item) => item)));



        },
        deleteFromCart: (state, action) => {
            state.items = state.items.filter((cart) => cart.id !== action.payload)

            localStorage.setItem('card', JSON.stringify(state.items.
                map((item) => item)));

        },
        clear: (state, action) => {
            state.items = []
        },

    }
})

export const { AddToCart, deleteFromCart, clear } = CartSlice.actions
export default CartSlice.reducer 