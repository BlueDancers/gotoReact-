import React from 'react'
import TotalPrice from '../TotalPrice'
import { shallow } from 'enzyme'


const props = {
  income: 1000,
  outcome: 2000
}

describe('test TotalPrice component', () => {
  it('component should render correct income and outcome number', () => {
    const wrapper = shallow(<TotalPrice {...props} />)
    expect(wrapper.find('.income').text() * 1).toEqual(1000)
    expect(wrapper.find('.outcome').text() * 1).toEqual(2000)
  })
})
