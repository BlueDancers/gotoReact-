import React, { Component } from "react";
import { connect } from "react-redux";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import  actionCreators from './store/actionCreators'

import { HomeWrapper, HomeLeft, HomeRigth } from "./style";
class Home extends Component {
  componentDidMount() {
    this.props.changHomeData()
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4577/353c8d29771d3c5c0bfbe92556fb65da78d3f3da.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRigth>
          <Recommend />
          <Writer />
        </HomeRigth>
      </HomeWrapper>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    changHomeData () {
      const action = actionCreators.gethomeData()
      dispatch(action)
    }
  }
}

export default connect(
  null,
  mapDispatch
)(Home);
