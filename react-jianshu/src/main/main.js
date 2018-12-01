import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../common/header/header";
import Home from '../pages/home';
import Detail from '../pages/detail';
import store from "../store/index";

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
         
          <BrowserRouter>
          {/* 路由 */}
            <div>
              {/* 路由规则 */}
              <Header /> 
              {/* 头部组件进行路由要转 必须将自身放到路由定义里面 */}
              <Route path="/" exact component={Home} />
              <Route path="/detail" exact component={Detail} />
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}
