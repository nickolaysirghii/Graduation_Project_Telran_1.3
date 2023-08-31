import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./Slices/fetchProductsAll";
import  categorySlice  from "./Slices/fetchCategries";
import categoryProductsSlice  from "./Slices/fechCategoryProdcts";
import  ProductSlice  from "./Slices/fetchEachProduct";
import  animationSlice  from "./Slices/animation";

export const store = configureStore({
    reducer: {
        allProducts: productsSlice,
        eachProduct: ProductSlice,
        allcategoryes: categorySlice,
        categoryProducts: categoryProductsSlice,
        animation: animationSlice

    }
});