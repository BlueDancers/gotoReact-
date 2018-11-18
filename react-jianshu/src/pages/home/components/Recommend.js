import React, { Component } from "react";
import { RecommendWrapper, RecommendItem } from "../style";
import { connect } from "react-redux";
class Recommend extends Component {
  render() {
    let { imglist } = this.props;
    return (
      <RecommendWrapper>
        {imglist.map(item => (
          <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')} />
        ))}
      </RecommendWrapper>
    );
  }
}

const mapState = state => ({
  imglist: state.home.get("recommendList")
});

export default connect(
  mapState,
  null
)(Recommend);
