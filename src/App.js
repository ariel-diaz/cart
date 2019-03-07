import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/navbar';
import {StoreProvider} from './store';
import Home from './components/home';
import Checkout from './components/checkout';

class App extends Component {
  render() {
    return (
      <div className="App">
      <StoreProvider>
        <Router>
        <>
        <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/checkout" component={Checkout} />
          </>
        </Router>
      </StoreProvider>
      </div>
    );
  }
}

export default App;
