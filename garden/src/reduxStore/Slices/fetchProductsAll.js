import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    productsData: [],
    CheckSale: false,
    FROM: 0,
    TO: 1000000,
    productsAll: [],
    prducstsSale: [],
    productsCart: [],
    cartAmount: 0,
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
    reducers: {
        saleFilter: (state)=>{
            state.CheckSale = !state.CheckSale
            if(state.CheckSale){
                state.productsAll = state.prducstsSale
            }else{
                state.productsAll = state.productsData
            }
        },
        priceFrom: ( state , action ) =>{
            state.FROM = action.payload
        },
        priceTo: ( state , action ) =>{
            state.TO = action.payload
        },
        sortedBy: ( state , action ) =>{
            if(action.payload === "default"){
                state.productsAll = state.CheckSale ? state.prducstsSale : state.productsData
            }else if( action.payload === "first"){
                state.productsAll = state.productsAll.sort((a,b)=>a.price - b.price)
            }else if( action.payload === "second"){
                state.productsAll = state.productsAll.sort((a,b)=>b.price - a.price)
            }else{
                state.productsAll = state.productsAll.sort((a,b)=>a.title.localeCompare(b.title))
            }
        },
        adToCart: ( state ,action ) =>{
            if(state.productsAll[action.payload].amount){
                state.productsAll[action.payload].amount +=1
            }else{
                state.productsAll[action.payload].amount = 1
            }
            state.cartAmount +=1;
        },
        deleteFromCart: ( state , action ) =>{
         state.cartAmount = state.cartAmount - state.productsAll[action.payload].amount;
         delete state.productsAll[action.payload].amount;
         
         }
    },
    extraReducers:{
        [fetchProducts.pending]: (state)=>{
            state.status = "loading";
        },
        [fetchProducts.fulfilled]: (state,action)=>{
            state.status = "resolved";
            state.productsData = action.payload;
            state.productsAll = action.payload;
            state.prducstsSale = action.payload.filter((elem)=>elem.discont_price)
        },
        [fetchProducts.rejected]: (state)=>{
            state.status = "rejected";
        }
    }
     });

     export const {saleFilter,priceFrom,priceTo,sortedBy,adToCart,deleteFromCart} = productsSlice.actions;
     export default productsSlice.reducer;