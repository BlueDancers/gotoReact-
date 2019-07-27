import React from 'react'
import { shallow } from 'enzyme'
import PriceList from '../PriceList'
import { priceList } from '../../containers/Home'

const props = {
  items: priceList,
  onModifyItem: () => {},
  onDeleteItem: () => {}
}

let wrapper
describe('测试 PriceList 组件', () => {
  beforeEach(() => {
    // 每次运行单个用例都会执行这一步
    wrapper = shallow(<PriceList {...props} />)
  })
  it('should render the component to match snapshot', () => {
    expect(wrapper).toMatchSnapshot() //创建快照测试 下次测试就会进行ui生成的对比
  })
  it('should render priceList length', () => {
    expect(wrapper.find('.list-group-item').length).toEqual(priceList.length)
  })
  it('should render correct icon and price for each-item 检查图标的正确性', () => {
    const iconsList = wrapper.find('')
  })
})
