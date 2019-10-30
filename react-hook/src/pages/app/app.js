import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import './app.css';

function App(props) {
  const [datas,setDatas] = useState([1,2,3,4,5,6,7,8,9])
  useEffect(() => {
    console.log(datas);
  })
  function testdata() {
    console.log(this);
  }
  return (
    <div className="App">
      <div>页面</div>
      <button onClick={() => setDatas(datas+1)}>
        测试
      </button>
      <button onClick={testdata}>
        测试111
      </button>
      {
        datas.map(e => (
          <div key={e}>{e}</div>
        ))
      }
      <div> {datas} </div>
    </div>
  );
}

const mapState = state => {
  return {
    data: state.data
  }
}

const mapDispatch = dispatch => {
  return {
  }
}

export default connect(
  mapState,
  mapDispatch
)(App)