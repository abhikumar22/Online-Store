import React from 'react';
import {
    // NavLink,
    Link
} from 'react-router-dom'
import '../assets/css/header.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from "@material-ui/core/IconButton"
import { Badge } from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';

import {
    useSelector,
    shallowEqual,
    // , useDispatch
} from "react-redux";



export default function Header() {
    const cartItems = useSelector(state => state.entities.cart, shallowEqual)
    // console.log("cartItems",cartItems.length)
    return (
        <div className="navStyle">
            <div className="row text-center justify-content-between mx-3">
                <IconButton className="text-white text-center aling-items-center">
                    <div>
                    <LocalMallIcon className="header__icon" fontSize="small" />
                    <Link to="/"><span className="navbar-brand text-white ml-2" >Online Store</span></Link>
                    </div>
                </IconButton>
                {/* <div className="wishList px-2">
                    <Link to="/wishlist">
                    <IconButton>
                        Wishlist
                            <Badge className="ml-2"  color="secondary" badgeContent={0}>
                                <FavoriteBorderIcon className="header__icon" fontSize="small" />
                            </Badge>
                        </IconButton>
                        </Link>
                    </div> */}
                <div className="cartList">
                    <Link to="/cart">
                        <IconButton className="text-center text-white" onClick={() => {
                            // console.log("************")
                        }}>
                            Cart
                            <Badge className="ml-2" color="secondary" badgeContent={cartItems.length}>
                                <ShoppingCartIcon className="header__icon" fontSize="small" />
                            </Badge>
                        </IconButton>
                    </Link>
                </div>
            </div>


            {/* <nav className="navbar navbar-expand-lg navbar-light text-white navStyle">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* <div className="wishList px-2">
                    <Link to="/wishlist">
                    <IconButton>
                        Wishlist
                            <Badge className="ml-2"  color="secondary" badgeContent={0}>
                                <FavoriteBorderIcon className="header__icon" fontSize="small" />
                            </Badge>
                        </IconButton>
                        </Link>
                    </div> */}

            {/* <div className="cartList px-2">
                        <Link to="/cart">
                    <IconButton className="text-center" onClick={()=>{
                                // console.log("************")
                            }}>
                        Cart
                            
                            <Badge className="ml-2" color="secondary" badgeContent={cartItems.length}>
                                <ShoppingCartIcon className="header__icon" fontSize="small" />
                            </Badge>
                        </IconButton>
                        </Link>
                    </div>

                </div>
            </nav> */}


        </div>
    );
}
