import store from '../configureStore'


// Action Names
const ADD_NEW_PRODUCT = "addProduct"
const ADD_NEW_PRODUCT_LIST = "addProductList"


// Actions
export function addProduct(productDetails) {
    return store.dispatch({
        type: ADD_NEW_PRODUCT,
        payload: {
            data: productDetails
        }
    });
}

export function addProductList(productListDetails) {
    return store.dispatch({
        type: ADD_NEW_PRODUCT_LIST,
        payload: {
            data: productListDetails
        }
    });
}

// Dispatcher
let lastId = 0
export default function reducer(product = [], action) {

    switch (action.type) {
        case ADD_NEW_PRODUCT:
            return [
                // prev state add
                ...product,
                //add new product
                {
                    id: ++lastId,
                    ...action.payload.data
                }
            ]
        case ADD_NEW_PRODUCT_LIST:
            // let counter = lastId;
            let temp = []
            for (let i = 0; i < action.payload.data.length; i++) {
                temp.push({
                    id: ++lastId,
                    ...action.payload.data[i]
                })
            }
            return [
                ...product,
                ...temp,
            ]
        default:
            return product;
    }

}