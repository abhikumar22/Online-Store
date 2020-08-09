import React, { useState, useEffect } from 'react';
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
import CalCulateTotalPrice from '../utils/utility'



const CartList = ({ someProp }) => {
    const cartList = useSelector(state => state.entities.cart, shallowEqual)

    const [totalAmount, setAmount] = useState(CalCulateTotalPrice(cartList))
    useEffect(() => {
        setAmount(CalCulateTotalPrice(cartList))
    }, [cartList]);
    return (
        <div>
            {cartList.length === 0 ?
                <div className="mt-5 text-center d-flex justify-content-center align-items-center" >
                    {/* <ol> */}
                    <div className="col col-8 col-md-6 col-sm-6 col-lg-3 p-2 shadow-lg p-3 mb-5 bg-white rounded">
                        <img className="img-fluid" src={require('../assets/images/emptyCartImage.jpg')} />
                        <span className="col"><h5>Your cart is empty!</h5></span>
                        <span className="col">Add items to it now</span>
                        <span className="col"> <Link to="/">  <button className="btn btn-primary mt-3 mb-3">Shop Now</button></Link></span>


                    </div>
                </div>
                :
                <div>
                    {cartList.map((data, index) =>
                        <li key={index}> {data.name} *  <button onClick={() => {
                            if (data.count === 1)
                                actions.deleteFromCart(data.id)
                            else
                                actions.deleteParticularProduct(data.productId)
                        }}>-</button> {data.count}  <button onClick={() => {
                            actions.addParticularProduct(data.productId)
                        }}>+</button> = {data.price * data.count} <button onClick={() => {
                            actions.deleteFromCart(data.id)
                            // console.log("ll", data)
                        }} className="btn bg-primary my-2 text-white">Delete From Cart</button></li>
                    )}
                    <div> Total Amount To be paid = {totalAmount}</div>
                    <button className="btn btn-success mt-5">Checkout</button>
                </div>
            }
        </div>
    );
}



export default CartList;