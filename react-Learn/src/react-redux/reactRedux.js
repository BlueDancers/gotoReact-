import React, { Component } from "react";
import { connect } from "react-redux";
class reactRedux extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.inputValue} onChange={this.props.changInputValue} name="" id="" />
        <button onClick={this.handClick.bind(this)}>提交</button>
        <ul>
          <li>111</li>
        </ul>
      </div>
    );
  }
  handClick (e) {
    
  }
}

const mapStateProps = state => { // 赋值
  return {
    inputValue: state.inputValue
  };
};
//store.dispatch 挂载到props
const mapDispatchToProps = (dispatch) => {
  return {
    changInputValue (e) {
      console.log(e.target.value);
      let action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    }
  }
}

export default connect(
  mapStateProps,
  mapDispatchToProps
)(reactRedux);



// function connent(data){
//   console.log('外部执行',data);
//   return function (data) {
//     console.log('内部执行',data);
//   }
// } 
// connent(1)(2)
