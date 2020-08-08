import React from 'react';
import configureStore from './store/configureStore';
import App from './App'
import { Provider } from 'react-redux';
import * as actions from './store/reducers/products'

const store = configureStore;

let obj = [{
  name: "vimal",
  price: 35
}, {
  name: "Binod",
  price: 99
}, {
  name: "Deepak Kalal",
  price: 55
}, {
  name: "Dhinchak pooja",
  price: 11
}]

actions.addProductList(obj)
actions.addProduct({
  name: "Rohit kumar",
  price: 786
})

export default function EntryFile() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}


