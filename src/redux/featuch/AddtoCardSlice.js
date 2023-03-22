import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [
        {
            id: 1,
            title: "HP Ryzen 5 Hexa Core 5500U",
            img: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70",
            price: "10",
            quantity: 1,
        },
        {
            id: 2,
            title: "ThinkBook 14 Gen 2 (14, Intel)",
            img: "https://www.lenovo.com/medias/ThinkBook-14-Gen-2-Intel-hero.png?context=bWFzdGVyfHJvb3R8NjYwMDh8aW1hZ2UvcG5nfGg2NC9oZjYvMTMwMzMyMzY0NjM2NDYucG5nfDdlZWU5OGJlYzllYWI0OTM2NDcyMjMwYzA4ZmY3OWRjZDFkNTI4NjgxNWJhOGRmNmZlYTE3OWUzODhmOWQyZjM",
            price: "20",
            quantity: 1,
        },
        {
            id: 3,

            title: "Yoga Slim 7 Carbon Gen 6 (14, AMD)",
            img: "https://www.lenovo.com/medias/lenovo-laptop-yoga-slim-7-carbon-gen-6-14-intel-subseries-hero.png?context=bWFzdGVyfHJvb3R8MjIxNTIyfGltYWdlL3BuZ3xoYTgvaDQ5LzE0MTkyNDM0Njc1NzQyLnBuZ3w1YzdiNzFlYjBiYWY0YmZlN2Q2MzhkZmViZDdkZTE2NGM0NWU4YTgyZjY5NWI3MDgyNDJlNjE3ZTNhY2ZmMmZh",
            price: "30",
            quantity: 1,
        },
    ],
    saveCart: [],
    // amount: 1,
    total: 0
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.saveCart = [...state.saveCart, action.payload]
            state.total += parseInt(action.payload.price)
            console.log(state.total);
        },
        removeCart: (state, action) => {
            const removeCart = action.payload

            const re = state.saveCart.findIndex((item) => item.id === removeCart.id)
            state.saveCart.splice(re, 1)

            state.total = state.total - (parseInt(action.payload.price) * action.payload.quantity)
            // console.log(state.total);
        },
        incrment: (state, action) => {
            const { id, price } = action.payload

            let item = state.saveCart.find((item) => id === item.id)
            console.log(item);

            if (item) {
                item.quantity += 1;
                state.total += parseInt(price);
            }
        },
        decrment: (state, action) => {
            const { id, price } = action.payload

            let item = state.saveCart.find((item) => id === item.id)
            console.log(item);

            if (item) {
                item.quantity -= 1;
                state.total -= parseInt(price);
            }
        },
    }
})

export const { addCart, removeCart, incrment, decrment } = CartSlice.actions

export default CartSlice.reducer