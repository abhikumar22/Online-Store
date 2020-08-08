import React from 'react';
import { connect } from 'react-redux'
import ProductList from '../components/productList';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // lenOF: 0,
    }

    // console.log("lll",this.state)

  }

  componentDidMount() {
    // store.subscribe(() => {
    //   this.setState({ lenOF: store.getState().entities.todo.length })
    // })
  }
  render() {
    return (
      <div className="text-center">
        <h1>All Products Listed below</h1>
        <ProductList/>
      </div>
    );
  }
}

//binding the state value so to get the todo list from store

// const mapDispatchToProps = dispatch => {
//   return {
//     addProduct: todoId => addProduct(todoId)
//   }
// }
const mapStateToProps = state => ({ productList: state.entities.product })


export default connect(mapStateToProps)(App);