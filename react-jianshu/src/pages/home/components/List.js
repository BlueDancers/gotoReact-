import React, { Component } from "react";
import { ListItem, ListInfo } from "../style";
import { connect } from "react-redux";
class List extends Component {
  render() {
    let { list } = this.props;
    return (
      <div>
        {list.map(item => (
          <ListItem key={item.get('id')}>
            <img
              className="pic"
              src={item.get('imgUrl')}
              alt=""
            />
            <ListInfo>
              <h3 className="title">{item.get('title')}</h3>
              <p className="desc">
               {item.get('desp')}
              </p>
            </ListInfo>
          </ListItem>
        ))}
      </div>
    );
  }
}

const mapState = state => {
  return {
    list: state.home.get("articleList")
  };
};

export default connect(
  mapState,
  null
)(List);
