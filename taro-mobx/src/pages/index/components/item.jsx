import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { observer, inject } from '@tarojs/mobx';

@inject('counterStore')
@observer
class Item extends Component {
  componentWillMount() {}

  componentWillReact() {
    console.log('componentWillReact');
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    // const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
        <Button onClick={this.child}>+</Button>
      </View>
    );
  }
  child = () => {
    console.log(this.props);
    this.props.counterStore.child(100);
  };
}

export default Item;
