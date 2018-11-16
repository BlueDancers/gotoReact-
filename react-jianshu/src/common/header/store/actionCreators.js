import { actionTypes } from "./index";

function closeFocus() {
  return {
    type: actionTypes.CLOSE_FOCUS
  };
}

function openFocus() {
  return {
    type: actionTypes.OPEN_FOCUS
  };
}

export default {
  closeFocus,
  openFocus
};
