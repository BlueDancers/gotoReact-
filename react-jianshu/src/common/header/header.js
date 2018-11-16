import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearctInfoList,
  SearchInfoItem
} from "./style";

const getlistArea = show => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearctInfoList>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
          <SearchInfoItem>教育</SearchInfoItem>
        </SearctInfoList>
      </SearchInfo>
    );
  } else {
    return null;
  }
};

const Header = props => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left action">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>

        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={500} classNames="slide">
            <NavSearch
              className={props.focused ? "focused" : ""}
              onFocus={props.handInputFocus}
              onBlur={props.handInputBlur}
            />
          </CSSTransition>

          <i className={props.focused ? "focused iconfont" : "iconfont"}>
            &#xe614;
          </i>
          {getlistArea(props.focused)}
        </SearchWrapper>
      </Nav>

      <Addition>
        <Button className="writting">
          <i className="iconfont">&#xe624;</i>写文章
        </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    focused: state.header.get("focused")
  };
};
const mapDuspatchToProps = dispatch => {
  return {
    handInputFocus() {
      const action = actionCreators.openFocus();
      dispatch(action);
    },
    handInputBlur() {
      const action = actionCreators.closeFocus();
      dispatch(action);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDuspatchToProps
)(Header);
