import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    products: [],
    isLoading:false,
    isError:false
}

export const getProducts = createAsyncThunk('products/getProducts',
async () => {
    return await axios.get('http://127.0.0.1:8000/api/v1/products/')
    .then((response) => response.data)
}
)


const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        reset: (state) => {
            state.isLoading = false
            state.isError = false          
        },
        extraReducers: {
                [getProducts.pending]: (state) => {
                    state.isLoading = true
    
                },
                [getProducts.fulfilled]:(state, action) => {
                    state.isLoading = false
                    state.products = action.payload
                    console.log('products', action.payload)
    
                },
                [getProducts.rejected]:(state) => {
                    state.isLoading = false
                    state.isError=true
    
                }
            }

    }
})

export const { reset } = productsSlice.actions

export default productsSlice.reducer