import store from '../configureStore'


// Action Names
const ADD_TO_CART = "addToCart"
const DELETE_FROM_CART = "deleteFromCart"
const ADD_PART_PRODUCT = "addParticularProduct"
const DELETE_PART_PRODUCT = "deleteParticularProduct"



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
export function addParticularProduct(id) {
    return store.dispatch({
        type: ADD_PART_PRODUCT,
        payload: {
            id: id
        }
    });
}
export function deleteParticularProduct(id) {
    return store.dispatch({
        type: DELETE_PART_PRODUCT,
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
            let isThere = cart.some(val => val.id === action.payload.data.id);
            if (isThere) {
                const index = action.payload.data.id;
                return cart.map((item) => (
                    item.id === index ? { ...item, count: item.count + 1 } : item
                ))
            }

            else
                return [
                    // prev state add
                    ...cart,
                    //add new product
                    {
                        count: 1,
                        idd: ++lastId,
                        ...action.payload.data
                    }
                ]
        case ADD_PART_PRODUCT:
            return cart.map((item) => (
                item.id === action.payload.id ? { ...item, count: item.count + 1 } : item
            ))
        case DELETE_PART_PRODUCT:
            return cart.map((item) => (
                item.id === action.payload.id ? { ...item, count: item.count -1 } : item
            ))
        case DELETE_FROM_CART:
            return cart.filter(val => val.idd !== action.payload.id)
        default:
            return cart;
    }

}