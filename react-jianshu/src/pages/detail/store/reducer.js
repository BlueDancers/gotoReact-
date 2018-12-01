import { actionType } from './index'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  title: '这4个Python实战项目，让你瞬间读懂Python！',
  content: ` 
      <p>
        这是《python基础教程》后面的实践，照着写写，一方面是来熟悉python的代码方式，另一方面是练习使用python中的基本的以及非基本的语法，做到熟能生巧。
      </p>
      <p>
        这个项目一开始比较简单，不过重构之后就有些复杂了，但是更灵活了。
      </p>
      <p>
        按照书上所说，重构之后的程序，分为四个模块：处理程序模块，过滤器模块，规则（其实应该是处理规则），语法分析器。
      </p>
      <p>
        先来说处理程序模块，这个模块的作用有两个，一个是提供那些固定的html标记的输出（每一个标记都有start和end），另一个是对这个标记输出的开始和结束提供了一个友好的访问接口。来看下程序handlers.py：
      </p>
      <img
        src="https://upload-images.jianshu.io/upload_images/13090773-de52ef84ecd79240.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp"
        alt=""
      />`,
})


export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType:
      
      break;
  
    default:
      return state
  }
}