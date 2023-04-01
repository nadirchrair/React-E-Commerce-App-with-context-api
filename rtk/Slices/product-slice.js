import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export const fetchProducts = createAsyncThunk('productSlice/fetchProducts', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})
export const productSlice = createSlice({
    initialState: [],
    name: 'productSlice',
    reducers: {
        Addproduct: (state, action) => {

            state.push(action.payload)
        },

    },
    extraReducers: (builder) => {
        //      builder.addCase(fetchProducts.pending, (state, action) => {
        //logic here
        //    state.push(action.payload)
        //        console.log(action);

        //        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            //logic here
            //    state.push(action.payload)
            return action.payload
            console.log(action);
            console.log(state);


        })


    }
})
export const { Addproduct } = productSlice.actions;

export default productSlice.reducer;