import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../featuch/AddtoCardSlice";



export const Store = configureStore({
    reducer: {
        cart: CartSlice,

    }
})

