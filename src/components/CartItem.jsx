import React from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/featuch/AddtoCardSlice'

const CartItem = ({ value }) => {

    const dispatch = useDispatch()

    // const addCart = () => {

    // }

    return (
        <div>
            <h1>{value.title}</h1>
            <button onClick={() => dispatch(addCart(value))} > add</button>
        </div>
    )
}

export default CartItem

