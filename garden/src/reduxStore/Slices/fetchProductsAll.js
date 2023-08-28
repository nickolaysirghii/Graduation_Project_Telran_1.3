import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    productsData: [],
    CheckSale: false,
    FROM: 0,
    TO: 1000000,
    productsAll: [],
    cartData: [],
    cartAmount: 0,
    status: "nothing"
};


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function (){
        const response = await fetch("http://localhost:3333/products/all");
        const data = await response.json();
        return data;
        }
  
);

export const productsSlice = createSlice({
    name: "products", 
    initialState,
    reducers: {
        saleFilter: (state)=>{
            state.CheckSale = !state.CheckSale
            if(state.CheckSale){
                state.productsAll = state.productsAll.filter((elem)=>elem.discont_price)
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
                const filtredProducts = state.productsAll.filter((elem)=>elem.discont_price)
                state.productsAll = state.CheckSale ? filtredProducts : state.productsData
            }else if( action.payload === "first"){
                state.productsAll = state.productsAll.sort((a,b)=>a.price - b.price)
            }else if( action.payload === "second"){
                state.productsAll = state.productsAll.sort((a,b)=>b.price - a.price)
            }else{
                state.productsAll = state.productsAll.sort((a,b)=>a.title.localeCompare(b.title))
            }
        },
        adToCart: ( state ,action ) =>{
            const next = { id: action.payload, amount: 1 }
            let exists = false;
            state.cartData.forEach((elem)=>{
            if(elem.id === action.payload){
               elem.amount += 1 ; exists = true ;
            }});
            if(exists === false){ state.cartData.push(next) };
            state.cartAmount += 1 ;
        },
        deleteFromCart: ( state , action ) =>{
            let between = [];
            let cartAmountCount = 0;
                state.cartData.forEach((elem)=>{
                if(elem.id !== action.payload){between.push(elem)}
                else{ cartAmountCount = elem.amount}
            })
            state.cartData = between;
            state.cartAmount = state.cartAmount - cartAmountCount ;
        },
        increaseAmount: ( state , action ) =>{
            state.cartData.forEach((elem)=>{
                if(elem.id === action.payload){ elem.amount += 1 };
            });
            state.cartAmount += 1 ;
        },
        decreaseAmount: ( state , action ) =>{
            state.cartData.forEach((elem)=>{
                if(elem.id === action.payload){ elem.amount -= 1 };
            });
            state.cartAmount -= 1 ;
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
           
        },
        [fetchProducts.rejected]: (state)=>{
            state.status = "rejected";
        }
    }
     });

     export const {saleFilter,priceFrom,priceTo,sortedBy,
        adToCart,deleteFromCart,
        increaseAmount,decreaseAmount } = productsSlice.actions;
     export default productsSlice.reducer;