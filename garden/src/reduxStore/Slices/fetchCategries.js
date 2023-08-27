import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    categoryesAll: [],
    status: "nothing"
};

export const fetchCategoryes = createAsyncThunk(
    'categoryes/fetchCategoryes',
    async function (){
        const response = await fetch("http://localhost:3333/categories/all");
        const data = await response.json();
        return data;
        }
);

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers:{
        [fetchCategoryes.pending]: (state)=>{
            state.status = "loading";
        },
        [fetchCategoryes.fulfilled]: (state,action)=>{
            state.status = "resolved";
            state.categoryesAll = action.payload;
        },
        [fetchCategoryes.rejected]: (state)=>{
            state.status = "rejected";
        }
    }
     });

     export const {} = categorySlice.actions;
     export default categorySlice.reducer;