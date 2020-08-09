import React from 'react';
import {
    useSelector,
    // , useDispatch
    shallowEqual,
} from "react-redux";

import '../assets/css/productList.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from "@material-ui/core/IconButton"


import * as actions from '../store/reducers/cart'


const ProductList = ({ someProp }) => {
    const productList = useSelector(state => state.entities.product, shallowEqual)
    return (
        <div className="box mt-3">
            {/* {productList.map((data, index) =>
                <li key={index}> {data.name} = {data.price} <button onClick={() => {
                    // actions.addToCart(data)
                    // console.log("ll", data)
                    const val = {
                        productId: data.id,
                        name: data.name,
                        price: data.price
                    }
                    actions.addToCart(val)
                }} className="btn bg-primary my-2 text-white">Add to cart</button>
                </li>
            )} */}


            {productList.map((data, index) => {
                return (
                    <div className="card" key={data.id}>
                        <div className="card-image">
                            {/* <div  style={{width:'100',height:'100',backgroundColor:'red'}}> */}
                            {/* efcds */}
                            <img src={require('../assets/images/defaultImage.jpg')} alt={data.title} style={{}} />
                            {/* </div> */}
                            {/* <span className="card-title">{data.name}</span> */}
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"
                            //  onClick={() => { this.handleClick(item.id) 
                            //  }}
                            >
                                <br />

                                <i className="material-icons">{data.name}</i>
                            </span>
                        </div>

                        <div className="card-content mb-2">
                            <p>Lorem ipsum dolor sit amet, pro ea sale delectus cotidieque, mea veri integre constituto ea.</p>
                            <p><b>Price: ₹ {data.price}</b><IconButton onClick={() => {
                                    const val = {
                                        productId: data.id,
                                        name: data.name,
                                        price: data.price
                                    }
                                    actions.addToCart(val)
                                }} >
                                    <div>
                                        <AddCircleIcon className="header__icon" fontSize="large" />
                                        {/* <Link to="/"><span className="navbar-brand text-white ml-2" >Online Store</span></Link> */}
                                    </div>
                                </IconButton></p>
                        </div>
                    </div>

                )
            })}


        </div>
    );
}



export default ProductList;