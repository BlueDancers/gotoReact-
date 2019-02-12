import React from 'react'
import PropTypes from 'prop-types'
const TotalPrice = ({ income, outcome }) => (
  <div className="row">
    <span className="col">
      收入:
      <span className="income">{income}</span>
    </span>
    <span className="col">
      支出:
      <span className="outcome">{outcome}</span>
    </span>
  </div>
)

TotalPrice.prototype = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired
}
export default TotalPrice
