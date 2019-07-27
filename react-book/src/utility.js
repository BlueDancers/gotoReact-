export const List_View = 'list'
export const Chart_View = 'chart'
export const TotalOutcome = 'outcome'
export const TotalIncome = 'income'


export const padLeft = n => {
  if (n >= 10) {
    return n
  } else {
    return `0${n}`
  }
}
/**
 * 
 * @param {number} size 总位数 
 * @param {number} startAt相对starrAt的初始数
 */
export const range = (size, startAt = 0) => {
  var rangeList = []
  for (let i = 0; i < size; i++) {
    rangeList[i] = startAt + i
  }
  return rangeList
}
