// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';
import OrderHistory from './components/OrderHistory';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/cart" component={ShoppingCart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={OrderHistory} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
