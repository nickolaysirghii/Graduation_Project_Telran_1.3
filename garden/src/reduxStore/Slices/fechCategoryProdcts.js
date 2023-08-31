import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    categoryProducts: [],
    categoryTitle: "",
    status: "nothing",
};

export const fetchCategoryProducts = createAsyncThunk(
    'categoryProducts/fetchCategoryProducts',
    async function (id){
        const response = await fetch(`http://localhost:3333/categories/${id}`);
        const data = await response.json();
        return data;
        }
);

export const categoryProductsSlice = createSlice({
    name: "categoryProducts",
    initialState,
    reducers: {
    },
    extraReducers:{
        [fetchCategoryProducts.pending]: (state)=>{
            state.status = "loading";
        },
        [fetchCategoryProducts.fulfilled]: (state,action)=>{
            state.status = "resolved";
            state.categoryProducts = [...action.payload.data];
            state.categoryTitle= action.payload.category.title;
        },
        [fetchCategoryProducts.rejected]: (state)=>{
            state.status = "rejected";
        }
    }
     })

     export default categoryProductsSlice.reducer;