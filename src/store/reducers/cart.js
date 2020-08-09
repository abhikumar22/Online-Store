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
export function addParticularProduct(productId) {
    return store.dispatch({
        type: ADD_PART_PRODUCT,
        payload: {
            productId: productId
        }
    });
}
export function deleteParticularProduct(productId) {
    return store.dispatch({
        type: DELETE_PART_PRODUCT,
        payload: {
            productId: productId
        }
    });
}


// Dispatcher
let lastId = 0
export default function reducer(cart = [], action) {

    switch (action.type) {
        case ADD_TO_CART:
            let isThereAlready = cart.some(val => val.productId === action.payload.data.productId);
            if (isThereAlready) {
                const index = action.payload.data.productId;
                return cart.map((item) => (
                    item.productId === index ? { ...item, count: item.count + 1 } : item
                ))
            }

            else
                return [
                    // prev state add
                    ...cart,
                    //add new product
                    {
                        count: 1,
                        id: ++lastId,
                        ...action.payload.data
                    }
                ]
        case ADD_PART_PRODUCT:
            return cart.map((item) => (
                item.productId === action.payload.productId ? { ...item, count: item.count + 1 } : item
            ))
        case DELETE_PART_PRODUCT:
            return cart.map((item) => (
                item.productId === action.payload.productId ? { ...item, count: item.count -1 } : item
            ))
        case DELETE_FROM_CART:
            return cart.filter(val => val.id !== action.payload.id)
        default:
            return cart;
    }

}