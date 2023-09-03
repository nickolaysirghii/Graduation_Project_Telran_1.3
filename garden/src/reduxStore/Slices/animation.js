import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   top: 0,
   left: 0,
   cartId: 1,
   cartDependAnimation: 0,
   apear: false,
   targetClasses: "",
   cartDirection: "up",
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
            state.top = action.payload.top;
            state.left = action.payload.left;
            state.targetClasses = action.payload.get_class;
            state.productImage = action.payload.image;
        },
        cartAnimation: (state , action)=>{
            state.cartDependAnimation = action.payload.state;
            state.cartId = action.payload.id;
            state.cartDirection = action.payload.direction;
        }
    },
   
     })

     export const { cartAnimation , changeAnimation , changePosition} = animationSlice.actions;
     export default animationSlice.reducer;