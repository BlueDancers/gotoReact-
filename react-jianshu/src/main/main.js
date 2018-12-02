import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from '../store/index'

import Header from '../common/header/header'
import Home from '../pages/home'
import Detail from '../pages/detail/loadable'
import Login from '../pages/login'
import Write from '../pages/write'


export default class Main extends PureComponent {
  render() {
    return (
      // Provider意思为将 store交给这些jsx元素使用
      <Provider store={store}>
        <BrowserRouter>
          {/* 路由 */}
          <div>
            {/* 路由规则 */}
            <Header />
            {/* 头部组件进行路由要转 必须将自身放到路由定义里面 */}
            {/* exact 为必须全部匹配才能执行该路由 */}
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/login" exact component={Login} />
            <Route path="/write" exact component={Write} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}
