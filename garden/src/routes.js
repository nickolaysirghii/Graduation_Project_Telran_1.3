import Home from "./components/Pages/Home/Home";
import AllProducts from "./components/Pages/AllProducts/Allproducts1";
import AllSales from "./components/Pages/AllSales/AllSales1";
import Categories from "./components/Pages/Categories/Categories";
import CategoryProducts from "./components/Pages/CategoryProducts/CategoryProducts";
import EachProduct from "./components/Pages/EachProduct/EachProduct";
import Cart from "./components/Pages/Cart/Cart"
import NotFound from "./components/Z_NotFound/NotFound";

export const pagesData = 
[
    {
        "path": "/",
        "element": Home,
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
        "path": "/categories",
        "element": Categories,
    },
    {
        "path": "/categories/:id",
        "element": CategoryProducts,
    },
    {
        "path": "/products/:prod",
        "element":EachProduct,
    },
    {
        "path": "/cart",
        "element":Cart,
    },
    {
        "path": "/*",
        "element": NotFound,
    },
];