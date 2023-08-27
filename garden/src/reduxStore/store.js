import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slices/fetchProductsAll";
import  categorySlice  from "./Slices/fetchCategries";

export const store = configureStore({
    reducer: {
        allProducts: productsSlice,
        allcategoryes: categorySlice
    }
});