import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    product: {},
    status: "nothing"
};

export const fetchProudct = createAsyncThunk(
    'product/fetchProduct',
    async function (prod){
        const response = await fetch(`http://localhost:3333/products/${prod}`);
        const data = await response.json();
        return data;
        }
);

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
    },
    extraReducers:{
        [fetchProudct.pending]: (state)=>{
            state.status = "loading";
        },
        [fetchProudct.fulfilled]: (state,action)=>{
            state.status = "resolved";
           state.product = action.payload[0]
        },
        [fetchProudct.rejected]: (state)=>{
            state.status = "rejected";
        }
    }
     })

     export const {} = ProductSlice.actions;
     export default ProductSlice.reducer;