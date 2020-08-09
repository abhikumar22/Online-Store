import React from 'react';
import {
    useSelector,
    // , useDispatch
    shallowEqual,
} from "react-redux";

import * as actions from '../store/reducers/cart'


const ProductList = ({ someProp }) => {
    const productList = useSelector(state => state.entities.product, shallowEqual)
    return (
        <div className="text-center">
            {productList.map((data, index) =>
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
            )}
        </div>
    );
}



export default ProductList;