import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchcategory = createAsyncThunk('CategorySlice/fetchcategory', async () => {
    const api = await fetch('https://fakestoreapi.com/products/categories');
    const data = await api.json();
    return data
})


export const CategorySlice = createSlice({
    initialState: [],
    name: 'CategorySlice',
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchcategory.fulfilled, (state, action) => {
            return action.payload

        })
    }
})
export default CategorySlice.reducer