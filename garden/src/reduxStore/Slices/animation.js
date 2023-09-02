import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   apear: false,
   X: 0,
   Y: 0,
   top: 0,
   left: 0,
   targetClasses: "",
   cartDependAnimation: 0,
   productImage: "/product_img/1.jpeg"

};


export const animationSlice = createSlice({
    name: "animation",
    initialState,
    reducers: {
        changeAnimation: (state)=>{
            state.apear = !state.apear
        },
        changePosition: ( state , action )=>{
            state.X = action.payload.x;
            state.Y = action.payload.y;
            state.top = action.payload.top;
            state.left = action.payload.left ;
        },
        getClass: ( state , action ) =>{
            state.targetClasses = action.payload
        },
        cartAnimation: (state , action)=>{
            state.cartDependAnimation = action.payload
        },
        takeImage: ( state , action ) =>{
            state.productImage = action.payload
        }
    },
   
     })

     export const {takeImage , cartAnimation , getClass , changeAnimation,changePosition} = animationSlice.actions;
     export default animationSlice.reducer;