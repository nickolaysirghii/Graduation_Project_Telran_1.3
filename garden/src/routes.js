
import Cart from "./components/Pages/Cart/Cart"
import NotFound from "./components/Z_NotFound/NotFound";
import EachProduct from "./components/Pages/EachProduct/EachProduct";
import AllProducts from "./components/Pages/AllProducts/Allproducts1";
import AllSales from "./components/Pages/AllSales/AllSales1";
import Categories from "./components/Pages/Categories/Categories";
import CategoryProducts from "./components/Pages/CategoryProducts/CategoryProducts";




export const pagesData = 

[
    {
        "path": "/",
        "element": "Home",
    },
    {
        "path": "/categories",
        "element": Categories,
    },
    {
        "path": "/cart",
        "element":Cart,
    },
    {
        "path": "/eachProduct",
        "element":EachProduct,
    },
    {
        "path": "/products/all",
        "element": AllProducts,
    },
    {
        "path": "/sales/all",
        "element": AllSales,
    },
    {
        "path": "/eachCategory",
        "element": CategoryProducts,
    },
    {
        "path": "/*",
        "element": NotFound,
    },
   
  
];