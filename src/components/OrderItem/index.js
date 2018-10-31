import React, { Component } from "react";
import "./style.css";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: 0
    };
  }
  render() {
    const { shop, name, product, picture, idCommented } = this.props.data;
    return (
      <div>
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
              {idCommented ? (
                <button className="orderItem__btn orderItem__btn--grey">
                  已评价
                </button>
              ) : (
                <button className="orderItem__btn orderItem__btn--red">
                  评价
                </button>
              )}
            </div>
          </div>
        </div>
        {this.renderEditArea()}
      </div>
    );
  }
  renderEditArea() {
    return (
      <div className="orderItem__commentContainer">
        <textarea
          className="orderItem__comment"
          name=""
          id=""
          cols="56"
          rows="5"
        />
        {this.renderStart()}
        <button className="orderItem__btn orderItem__btn--red">提交</button>
        <button className="orderItem__btn orderItem__btn--grey">取消</button>
      </div>
    );
  }

  renderStart() {
    const { stars } = this.state;
    return (
      <div>
        {[1, 2, 3, 4, 5].map((e, index) => {
          const light = stars >= e ? "orderItem_star--light" : "";
          return <span key={index}>★</span>;
        })}
      </div>
    );
  }
}
