import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slices/fetchProductsAll";
import  categorySlice  from "./Slices/fetchCategries";
import categoryProductsSlice  from "./Slices/fechCategoryProdcts";

export const store = configureStore({
    reducer: {
        allProducts: productsSlice,
        allcategoryes: categorySlice,
        categoryProducts: categoryProductsSlice
    }
});