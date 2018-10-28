import React, { Component } from 'react'
import OrderItem from '../OrderItem';

const data = {
    id: 1,
    name: '百香果(冷饮)1扎',
    shop: '院落创意菜',
    picture: require('../../img/task1.png'),
    product: 19.9,
    idCommented: true
  }


export default class index extends Component {
  render() {
    return (
      <div>
        <OrderItem data={data}></OrderItem>
      </div>
    )
  }
}
