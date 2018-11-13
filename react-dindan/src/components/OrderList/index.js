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
            return <OrderItem key={e.id} data={e} onSubmit= {this.handleSumbit} />
          })
        }
      </div>
    );
  }
  handleSumbit = (id, comment, stars) => {
    // 这里写的有点复杂 但是实现的比较有意思
    // const newData =  this.state.data.map(e => {
    //   return e.id === id  ? {
    //     ...e, comment, stars, ifCommented: true
    //   } : e
    // })
    // this.setState({data:newData})
    
    let data = this.state.data
    data.map(e => {
      if (e.id === id) {
        e.comment = comment
        e.stars = stars
        e.ifCommented = true
      }
    })
    this.setState({
      data
    })
  }
}
