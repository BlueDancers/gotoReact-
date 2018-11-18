import React from "react";
import ReactDOM from "react-dom";
import App from "./main/main";
import './mock/mock'
import { GlobalStyle } from "./style";
import { GlobalStyleIcon } from "./static/iconfont/iconfont";
const dom = (
  <div>
    <GlobalStyle />
    <GlobalStyleIcon />
    <App />
  </div>
);

ReactDOM.render(dom, document.getElementById("root"));
