import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    productsAll: [],
    status: "nothing"
};

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function (){
        if(localStorage.getItem("garden")){
            return JSON.parse(localStorage.getItem("garden"))
        }else{
        const response = await fetch("http://localhost:3333/products/all");
        const data = await response.json();
        return data;
        }
  }
);

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers:{
        [fetchProducts.pending]: (state)=>{
            state.status = "loading";
        },
        [fetchProducts.fulfilled]: (state,action)=>{
            state.status = "resolved";
            state.productsAll = action.payload;
        },
        [fetchProducts.rejected]: (state)=>{
            state.status = "rejected";
        }
    }
     });

     export const {} = productsSlice.actions;
     export default productsSlice.reducer;