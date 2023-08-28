import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    categoryesAll: [],
    categoryName: "",
    categoryId: 1,
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
    reducers: {
        changeCategory: ( state , action ) =>{
           state.categoryId = action.payload
           state.categoryName = state.categoryesAll[action.payload - 1].title
        }
    },
    extraReducers:{
        [fetchCategoryes.pending]: (state)=>{
            state.status = "loading";
        },
        [fetchCategoryes.fulfilled]: (state,action)=>{
            state.status = "resolved";
            state.categoryesAll = action.payload;
            state.categoryName = action.payload[0].title
            state.categoryName = action.payload[state.categoryId - 1].title 
        },
        [fetchCategoryes.rejected]: (state)=>{
            state.status = "rejected";
        }
    }
     })

     export const {changeCategory} = categorySlice.actions;
     export default categorySlice.reducer;