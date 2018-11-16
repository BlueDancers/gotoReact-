import React, { Component } from "react";
import { Provider } from "react-redux";
import Header from "../common/header/header";
import store from "../store/index";

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    );
  }
}
