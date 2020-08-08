import { combineReducers } from 'redux'
// import all reducers
import ProductReducer from './reducers/products'
import CartReducer from './reducers/cart'

// ************************************************************
// add your hirarcy here for the reducers which you want like
// entities :{ todo,payment,hotel,groups}
// auth :{userId:1,name:"john"}
// ui :{state specific to ui  }
// ************************************************************


const entities = combineReducers({ product: ProductReducer, cart: CartReducer })



// put the reducers in the hirarcy form which you want
export default combineReducers({
    entities: entities
})