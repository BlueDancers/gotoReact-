
const defaultState = {
  data: '测试'
}

export default (state = defaultState,action) => {
  switch (action.type) {
    case 'test':
      return state => state.data = '111111';
    case 'test1':
      return state => state.data = '222222';
    default:
      return state
  }
}