import store from '../configureStore'


// Action Names
const ADD_TO_CART = "addToCart"
const DELETE_FROM_CART = "deleteFromCart"


// Actions

export function addToCart(productDetails) {
    return store.dispatch({
        type: ADD_TO_CART,
        payload: {
            data: productDetails
        }
    });
}
export function deleteFromCart(id) {
    return store.dispatch({
        type: DELETE_FROM_CART,
        payload: {
            id: id
        }
    });
}

 
// Dispatcher
let lastId = 0
export default function reducer(cart = [], action) {

    switch (action.type) {
        case ADD_TO_CART:
            return [
                // prev state add
                ...cart,
                //add new product
                {
                    idd: ++lastId,
                    ...action.payload.data
                }
            ]
        case DELETE_FROM_CART:
            return cart.filter(val => val.idd !== action.payload.id)
        default:
            return cart;
    }

}