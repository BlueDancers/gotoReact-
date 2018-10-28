import React, { Component } from "react";
import "./style.css";
export default class index extends Component {
  render() {
    const { shop , name , product, picture, idCommented } = this.props.data;
    return (
      <div className="orderItem">
        <div className="orderItem_left">
          <div className="orderItem__picContainer">
            <img className="orderItem__pic" src={picture} alt="" />
          </div>
          <div className="orderItem_content">
            <div className="orderItem__product">{name}</div>
            <div className="orderItem__stop">{shop}</div>
            <div className="orderItem__detail">
              <div className="orderItem__price">{product}</div>
            </div>
          </div>
        </div>
        <div className="orderItem_right">
          <div className="orderItem__buttom">
          {
            idCommented? (
              <button className="orderItem__btn orderItem__btn--grey">已评价</button>
            ) : (
              <button className="orderItem__btn orderItem__btn--red">评价</button>
            )
          }

          </div>
        </div>
      </div>
    );
  }
}
