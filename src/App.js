import React, { Component, Fragment } from 'react';
import { GlobalStyled, BackTopStyle } from './style.js';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux'
import { BackTop } from 'antd';
import {
  BrowserRouter,
  // Switch,
  Route,
  // Link
} from "react-router-dom";
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyled />
        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
        </Provider>
        <BackTop visibilityHeight={100}>
          <BackTopStyle>UP</BackTopStyle>
        </BackTop>
      </Fragment>
    );
  }
}

export default App;
