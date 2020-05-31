import React, { Component, Fragment } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  List from './components/LIst'
import  Recommend from './components/Recommend'
import  Writer from './components/Writer'
import  Topic from './components/Topic'
import { HomeWrapper,HomeLeft, HomeRight} from "./style";

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="banner-img" src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b60e10dd517a4cf61b7346dbb18c4f38.jpg?thumb=1&w=1103&h=414&f=webp&q=90"/>
        <Topic/>
        <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>

    )
  }
}