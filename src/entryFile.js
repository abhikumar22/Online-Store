import React from 'react';
import configureStore from './store/configureStore';
import App from './App'
import { Provider } from 'react-redux';
import * as actions from './store/reducers/products'

const store = configureStore;

let obj = [{
  name: "Adidas Shoes",
  price: 3500
}, {
  name: "Nike shoes",
  price: 990
}, {
  name: "Realme 3 pro",
  price: 11000
}, {
  name: "Iphone 11",
  price: 60000
},{
  name: "Adidas Shoes",
  price: 3500
}, {
  name: "Nike shoes",
  price: 990
}, {
  name: "Realme 3 pro",
  price: 11000
}, {
  name: "Iphone 11",
  price: 60000
},{
  name: "Adidas Shoes",
  price: 3500
}, {
  name: "Nike shoes",
  price: 990
}, {
  name: "Realme 3 pro",
  price: 11000
}, {
  name: "Iphone 11",
  price: 60000
},{
  name: "Adidas Shoes",
  price: 3500
}, {
  name: "Nike shoes",
  price: 990
}, {
  name: "Realme 3 pro",
  price: 11000
}, {
  name: "Iphone 11",
  price: 60000
},{
  name: "Adidas Shoes",
  price: 3500
}, {
  name: "Nike shoes",
  price: 990
}, {
  name: "Realme 3 pro",
  price: 11000
}, {
  name: "Iphone 11",
  price: 60000
}]

actions.addProductList(obj)
actions.addProduct({
  name: "RamDEv Baba",
  price: 786
})

export default function EntryFile() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}


