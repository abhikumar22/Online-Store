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
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton } from '@material-ui/core';



const CartList = ({ someProp }) => {
    const cartList = useSelector(state => state.entities.cart, shallowEqual)

    const [totalAmount, setAmount] = useState(CalCulateTotalPrice(cartList))
    useEffect(() => {
        setAmount(CalCulateTotalPrice(cartList))
    }, [cartList]);
    return (
        <div className>
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
                <div className="d-flex justify-content-center align-items-center">
                    <div className="container bg-primary mt-4 p-3 shadow-lg p-3 mb-5 bg-white rounded mx-4 mb-2">
                        <span className="text-start"><h4 className="ml-3">Cart ({cartList.length})</h4></span>
                        <hr />
                        <div className="row p-3">
                            <div className="col-sm-8 col-md-8 col-lg-8">
                                {/* <div> */}
                                {cartList.map((data, index) =>
                                    <div key={index}>
                                        <div className="row">
                                            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                                                <div className="img-fluid">
                                                    <img className="img-fluid" src={require('../assets/images/defualt_product_image.jpg')} />
                                                </div>
                                                <div className="row d-flex justify-content-center align-items-center mt-1">
                                                    <IconButton className="col-4 col-sm-4 col-md-4 col-lg-4  m-0" onClick={() => {
                                                        if (data.count === 1)
                                                            actions.deleteFromCart(data.id)
                                                        else
                                                            actions.deleteParticularProduct(data.productId)
                                                    }}>
                                                        <RemoveCircleIcon />
                                                    </IconButton>
                                                    <div className="">{data.count}</div>
                                                    <IconButton className="col-4 col-sm-4 col-md-4 col-lg-4  m-0" onClick={() => {
                                                        actions.addParticularProduct(data.productId)
                                                    }}>
                                                        <AddCircleIcon />
                                                    </IconButton>
                                                </div>
                                            </div>
                                            <div className="col-9 col-sm-9 col-md-9 col-lg-9">
                                                <h4>{data.name}</h4>
                                                <div className="mh-150 text-truncate">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
                                                <div className="row mt-2 pl-3 d-flex justify-content-between" style={{ display: "flex", alignItems: 'center' }}>
                                                    <div className=""><h4>₹ {data.price * data.count}</h4></div>
                                                    <button onClick={() => {
                                                        actions.deleteFromCart(data.id)
                                                    }} type="button" className="btn btn-outline-danger mr-5">Remove</button>
                                                </div>
                                            </div>


                                        </div>

                                        <hr />
                                    </div>
                                )}
                                {/* </div> */}
                            </div>
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <span><h5 className="text-uppercase text-muted">Order details</h5></span>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <span>Price ({cartList.length} items)</span>
                                    <span>₹ {totalAmount}</span>
                                </div>
                                <br />
                                <div className="d-flex justify-content-between">
                                    <span>Delivery Fee</span>
                                    <span>FREE</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <h5>Total Amount</h5>
                                    <h5>{totalAmount}</h5>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    );
}



export default CartList;