import { createSlice } from '@reduxjs/toolkit'
export const bankSlice = createSlice({
    initialState: 2000,
    name: 'bankSlice',
    reducers: {
        withdraw: (state, action) => {
            return state = state - action.payload
        },
        deposite: (state, action) => {
            return state = state + action.payload
        }
    }
})
export const { withdraw, deposite } = bankSlice.actions;

export default bankSlice.reducer;