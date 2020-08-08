import React from 'react';
import HomePage from './pages/homepage'
import CartPage from './pages/cartpage'
import Error404 from './pages/error404'
import Header from './components/header'
import './assets/css/app.css'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <div className="mainApp">
      <Router>
        <Header/>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route exact path={'/homepage'} component={HomePage} />
          <Route exact path='/cart' component={CartPage} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}
