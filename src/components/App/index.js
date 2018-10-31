import React, { Component } from "react";
import "./style.css";
import Header from "../../components/Header";
import OrderItem from "../../components/OrderItem";
import OrderList from "../../components/OrderList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OrderList />
      </div>
    );
  }
}

export default App;
