import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    mob: window.innerWidth < 800 ? "mob" : "",
    productsData: [],
    CheckSale: false,
    SortData: "default",
    FROM: 0,
    TO: 1000000,
    productsAll: [],
    cartData: [],
    cartAmount: 0,
    circleAmount: 0,
    sendStatus: false,
    sendDiscountStatus: false,
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
        },
        priceFrom: ( state , action ) =>{
            state.FROM = action.payload
        },
        priceTo: ( state , action ) =>{
            state.TO = action.payload
        },
        sortedBy: ( state , action ) =>{
        state.SortData = action.payload
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
            state.circleAmount += 1 ;
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
            state.circleAmount  = state.circleAmount - cartAmountCount;
        },
        increaseAmount: ( state , action ) =>{
            state.cartData.forEach((elem)=>{
                if(elem.id === action.payload){ elem.amount += 1 };
            });
            state.cartAmount += 1 ;
            state.circleAmount += 1 ;
        },
        decreaseAmount: ( state , action ) =>{
            state.cartData.forEach((elem)=>{
                if(elem.id === action.payload){ elem.amount -= 1 };
            });
            state.cartAmount -= 1 ;
            state.circleAmount -= 1 ;
        },
        purchase: ( state , action) =>{
            state.sendStatus = action.payload;
            state.cartData = [];
            state.cartAmount = 0;
        },
        returnBack: ( state , action ) =>{
            state.sendStatus = action.payload;
        },
        discountRequest: ( state , action ) =>{
            state.sendDiscountStatus = action.payload
        },
        clearCircleAmount: ( state ) =>{
            state.circleAmount = 0;
        },
        changeVersion: (state , action)=>{
           state.mob = action.payload
        }
    },
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

     export const { purchase,saleFilter,priceFrom,
                    priceTo,sortedBy,adToCart,
                    deleteFromCart,increaseAmount,
                    discountRequest,clearCircleAmount,
                    decreaseAmount,returnBack,
                    changeVersion } = productsSlice.actions;
     export default productsSlice.reducer;