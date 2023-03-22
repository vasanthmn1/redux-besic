import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrment, incrment, removeCart } from '../redux/featuch/AddtoCardSlice';

const Savecart = () => {
    const { saveCart } = useSelector((state) => state.cart)
    console.log(saveCart);
    const dispatch = useDispatch()

    // const removeCart = () => {

    // }


    return (
        <div>
            {
                saveCart.map((val, idx) => {
                    return (
                        <div key={idx}>
                            <h1>{val.title}</h1>
                            <button onClick={() => dispatch(incrment(val))}>
                                +
                            </button>
                            <button onClick={() => dispatch(decrment(val))}>
                                -
                            </button>
                            <button onClick={() => {
                                dispatch(removeCart(val))
                            }}>del</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Savecart
