import React from 'react'
import Icon from 'react-ionicons'
import propTypes from 'prop-types'
import { Chart_View, List_View } from '../utility'

const generateLinkClass = (current, view) => {
  return current === view ? 'nav-link active' : 'nav-link'
}

const ViewTab = ({ activeTab, onTabChange }) => {
  return (
    <ul className="nav nav-tabs nav-fill my-4">
      <li className="nav-item">
        <span
          className={generateLinkClass(activeTab, List_View)}
          onClick={() => {
            onTabChange(List_View)
          }}
        >
          <Icon
            className="rounded-circle mr-2"
            fontSize="25px"
            color={'#007bff'}
            icon="ios-paper"
          />
          列表模式
        </span>
      </li>
      <li className="nav-item">
        <span
          className={generateLinkClass(activeTab, Chart_View)}
          onClick={() => {
            onTabChange(Chart_View)
          }}
        >
          <Icon
            className="rounded-circle mr-2"
            fontSize="25px"
            color={'#007bff'}
            icon="ios-pie"
          />
          图表模式
        </span>
      </li>
    </ul>
  )
}
ViewTab.propTypes = {
  activeTab: propTypes.string.isRequired,
  onTabChange: propTypes.func.isRequired
}

export default ViewTab
