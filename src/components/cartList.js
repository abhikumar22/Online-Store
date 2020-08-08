import React from 'react';
import {
    useSelector,
    // , useDispatch
    shallowEqual,
} from "react-redux";
import {
    // NavLink,
    Link
} from 'react-router-dom'

import * as actions from '../store/reducers/cart'


const CartList = ({ someProp }) => {
    const cartList = useSelector(state => state.entities.cart, shallowEqual)
    return (
        <div className="text-center">
            {/* <ol> */}
            {cartList.length === 0 ?
                <div >
                    <h1>Your cart is empty!</h1>
                    <h3>Add items to it now.</h3>
                    <Link to="/"><button>Shop Now</button></Link>


                </div>
                :
                cartList.map((data, index) =>
                    <li key={index}> {data.name} *  <button onClick={() => {
                        if (data.count === 1) 
                            actions.deleteFromCart(data.idd)
                        else
                            actions.deleteParticularProduct(data.idd)
                    }}>-</button> {data.count}  <button onClick={() => { 
                        actions.addParticularProduct(data.idd)
                    }}>+</button> = {data.price * data.count} <button onClick={() => {
                        actions.deleteFromCart(data.idd)
                        // console.log("ll", data)
                    }} className="btn bg-primary my-2 text-white">Delete From Cart</button></li>
                )
            }
            {/* </ol> */}
        </div>
    );
}



export default CartList;