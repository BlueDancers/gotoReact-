import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { TopicWrapper, TopicItem } from "../style";
class Topic extends PureComponent {
  render() {
    let { list } = this.props;
    return (
      <TopicWrapper>
        {list.map(item => (
          <TopicItem key={item.get("id")}>
            <img className="topic-pic" src={item.get("imgUrl")} alt="" />
            {item.get("title")}
          </TopicItem>
        ))}
      </TopicWrapper>
    );
  }
}

const mapState = state => {
  return {
    list: state.home.get("topicList")
  };
};

export default connect(
  mapState,
  null
)(Topic);
