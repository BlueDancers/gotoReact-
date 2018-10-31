import React, { Component } from "react";
import OrderItem from "../OrderItem";

export default class index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch("/mock/order.json").then(res => {
      if (res.ok) {
        console.log(res);
        res
          .json()
          .then(data => {
            console.log(data);
            this.setState({
              data
            })
          })
      }
    });
  }
  render() {
    return (
      <div>
        {
          this.state.data.map(e => { // 一定要return 因为这个是js 第一要加key值
            return <OrderItem key={e.id} data={e} />
          })
        }
      </div>
    );
  }
}
