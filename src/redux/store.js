import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice";
import { productsReducers } from "./ProductsSlice";
import { userReducer } from "./UserSlice";

 const store =configureStore({
    reducer:{
    cart:cartReducer,
    user:userReducer,
    products:productsReducers
}});

export default store;