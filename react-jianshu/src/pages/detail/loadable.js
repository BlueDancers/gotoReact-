import React from 'react'
import Loadable from 'react-loadable'

// 需要注意的是 如果是将index 直接改为loadable.js 的话 路由信息的props里面的信息将会传递该这个页面 
// 不会传递给index index里面就获取不到 props里面的参数 

const LoadableComponent = Loadable({
  loader: ()=> import('./'),
  loading() {
    return <div>正在加载.........................</div>
  }
})


export default ()=> <LoadableComponent/>