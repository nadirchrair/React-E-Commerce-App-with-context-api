import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchproduct = createAsyncThunk("ProductSlice/fetchproduct", async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data

})

export const productId = createAsyncThunk("ProductSlice/productId", async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data

})

export const fetchAnyProduct = createAsyncThunk('ProductSlice/fetchAnyProduct', async (category) => {
    const api = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await api.json();
    return data
})

export const ProductSlice = createSlice({
    initialState: [],
    name: 'ProductSlice',
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchproduct.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(productId.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(fetchAnyProduct.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const { } = ProductSlice.actions
export default ProductSlice.reducer 