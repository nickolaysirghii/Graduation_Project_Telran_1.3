import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   apear: false,
   X: 0,
   Y: 0,
   targetClasses: "",
   cartDependAnimation: 0

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
            state.Y = action.payload.y
        },
        getClass: ( state , action ) =>{
            state.targetClasses = action.payload
        },
        cartAnimation: (state , action)=>{
            state.cartDependAnimation = action.payload
        }
    },
   
     })

     export const { cartAnimation , getClass , changeAnimation,changePosition} = animationSlice.actions;
     export default animationSlice.reducer;