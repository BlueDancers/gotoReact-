import styled from "styled-components";
import LogoPic from "../../static/logo.png";

const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
`;

const Logo = styled.a.attrs({
  href: "/"
})`
  height: 58px;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 58px;
  background: url(${LogoPic});
  background-size: contain;
`;
const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;
const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.action {
    color: #ea6f5a;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  float: left;

  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    transition: all 0.5s;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`;

const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  outline: none;
  width: 160px;
  height: 40px;
  padding: 0 40px 0 20px;
  box-sizing: border-box;
  border: none;
  margin-top: 8px;
  margin-left: 20px;
  border-radius: 40px;
  background: #eee;
  font-size: 14px;
  border: 1px solid #eee;
  color: #666;
  /* transition: all 0.5s; */
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 260px;
  }
  &.slide-enter {
    transition: all 0.5s ease-in-out;
  }
  &.slide-enter-active {
    width: 260px;
  }
  &.slide-exit {
    transition: all 0.5s ease-in-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 58px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
`;
const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696; 
`;

const SearchInfoSwitch = styled.span`
  user-select: none;
  cursor: pointer;
  float: right;
  font-size: 14px;
  .spin {
    display: inline-block;
    font-size: 12px;
    margin-right: 4px;
    transition: all 0.2s;
    transform-origin: center;
  }
`;
const SearctInfoList = styled.div`
  overflow: hidden;
`;
const SearchInfoItem = styled.a`
  display: block;
  line-height: 20px;
  float: left;
  padding: 0 5px;

  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`;

const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 58rpx;
`;
const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background-color: #ec6149;
  }
`;
export {
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
  SearchInfoItem,
  SearctInfoList
};
