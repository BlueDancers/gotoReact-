import React from 'react'
import { Input, Button, List } from "antd";

export default (props) => {
  return (
    <div style={{ display: 'flex',justifyContent: 'center',flexWrap: 'wrap',marginTop:10}}>
      <div>
        <Input
          placeholder="todo Input"
          style={{ width: 225, marginRight: 10 }}
          value={props.inputValue}
          onChange={props.updateInputChange}
        />
        <Button type="primary" onClick={props.bindclick}>提交</Button>
      </div>
      <List
        style={{ width: 300, marginTop: 10 }}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => <List.Item onClick={() => {props.deleteList(index)}}>{item}</List.Item>}
      />
    </div>
  )
}

// export default class todolistUI extends Component {
//   render() {
//     return (
//       <div style={{ display: 'flex',justifyContent: 'center',flexWrap: 'wrap',marginTop:10}}>
//         <div>
//           <Input
//             placeholder="todo Input"
//             style={{ width: 225, marginRight: 10 }}
//             value={this.props.inputValue}
//             onChange={this.props.updateInputChange}
//           />
//           <Button type="primary" onClick={this.props.bindclick}>提交</Button>
//         </div>
//         <List
//           style={{ width: 300, marginTop: 10 }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item,index) => <List.Item onClick={(index) => {this.props.deleteList(index)}}>{item}</List.Item>}
//         />
//       </div>
//     )
//   }
// }
