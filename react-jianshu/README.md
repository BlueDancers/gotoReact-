# React项目的最佳实践

#### 项目代码 [从零开始简书项目](https://github.com/vkcyan/gotoReact-/tree/master/react-jianshu)





​	从我第一次接触`vue`这个框架已经过了快一年的时间,陪伴我从前端小白到前端工程师,前端时间也是使用了	`ts`+`vue`这样的组合写代码,明显感觉vue与ts似乎没有产生比较好的化学反应,而`vue`这一块,也算是比较熟练了,对底层也有一些了解,我开始了react的产生了一些兴趣

​	第一次看`react`慕课网上的一个免费课程[React 16实现订单列表及评价功能](https://www.imooc.com/learn/1061),还不错,让我大致了解了`react`也就是`jsx`的一些代码风格

因为可能写`vue`的时间比较久了,转到`react`还没有我想象的的难度那么大,一切似乎都顺风顺水,后面我就开始看慕课网的[React 16.4 开发简书项目 从零基础入门到实战](https://coding.imooc.com/class/229.html),老师将前面基础讲的比较全面,虽然没有过api,但是讲了 react的周边 `redux`, `redux-thunk`, `redux-saga` `react-redux` ,等等,老师是很有水平

​	但是正在写课程代码里面 用了大量的这样的库,我在学的过程里面,感觉不太理解这些库的内部实现,这一点感觉到react上面的一些吃力的地方,还有待学习吧,目前只能是入门了react,感觉现在的前端开发,不是会`js`,就能写出代码的了,要学习各种各样的各种库的API,只会用,不了解其原理,今年是这个库,明年是哪个库,已经不是`前端开发者`了 是`前端框架使用者`学习成本过高,陷入到一种比较迷茫的阶段,有点不知所措,

本次总结的重点,总结老师的项目架构,数据与数据与视图的完全解耦,是一个非常完美的开发方式,同时具备灵活性,但是非常万金油,项目这样搭建,非常易于维护

看一些最后的效果图

![](http://pj4xfr92l.bkt.clouddn.com/FgWQAKjRNLL_79Y4XDAc3SSM_9-J.png)



![](http://pj4xfr92l.bkt.clouddn.com/Fixx7G7IdmRh-bWhVP8C5VygJq7Q.png)





![](http://pj4xfr92l.bkt.clouddn.com/FkWWNvbKX81c8xhB1mmDkZanl4cG.png)



### 使用到的技术栈

**react** **react-dom** `react`项目开发必备

***
**redux** `react`的数据管理工具

**redux-thunk** `redux`的中间件,让`redux`的`dispatch`支持异步操作

**immutable** 保证数据的不可变性,配合`PureComponent`使用,效果拔群

****

**styled-components** 使用js的方式写`css`,是比`less`,更加好用的工具

**react-transition-group** react里面比较好用的动画库

***

**axios** 支持`Promise`的`ajax`库

**mockjs** 数据模拟库 使用他将不在需要在接触第三方去生成接口

***

**react-loadable** 让`react`可以异步加载组件的插件

***

**react-router-dom** `react`的路由处理库[react-router和react-router-dom的区别](https://github.com/mrdulin/blog/issues/42)

使用的技术比较多,是很完成的项目开发方式

页面与redux的交互

```
pages
 - index
  - store
  	- index.js store的出口
  	- reducer.js 组件中数据的创建于修改
  	- actiontypes.js 定制统一的type值,用于修改reducer里面的值
  	- actionCreaters.js 生成action,触发reducer,去进行数据修改
  - index.js 视图
  - style.js styled css
  	
```



每个页面结构都是这样的,在最外面的`reducer`里面进行每个页面中的`reducer`的合并,这样做达到了

页面中的`视图`与`数据`的完全解耦

`页面`与`页面`之前的数据完全解耦

项目结构变得非常清楚,非常利于维护



### 修改一个数据的流程

1.  在组件的视图中, 通过 `react-redux`里面的`connent`获取`state` `dispatch`,库帮我们将`state` `dispatch` 挂载到了`this.props`中,

```react
  const mapState = state => ({
    title: state.detail.get('title'), //  immutable数据 获取state树中的detail分支下的title
    content: state.detail.get('content')
  })
  const mapDispatch = dispatch => ({
    getDetail(id) { // 视图中触发该方法 方法内部触发dispatch 获取由actionCreators生成的action,交给reducer
      //.. 发送dispatch 操作reducer
    }
  })

  export default connect(
    mapState,
    mapDispatch
  )(withRouter(Detail))
```



2. 导入当前文件夹下的`store/actionCreaters.js` ,在mapDispatch里面发送action给`reducer`

```react
 const mapDispatch = dispatch => ({
    getDetail(id) { 
      // 视图中触发该方法 方法内部触发dispatch 获取由actionCreators生成的action,交给reducer
      reducer dispatch(actionCreators.getDetail(id))
    }
  })
```

3. 在`actionCreators.js`中已经异步操作,或者直接发放`action`

```react
import { actionType } from './index' // 所有数据来源于index中
import axios from 'axios'
import { fromJS } from 'immutable'

function _getDetail(data) { // 私有方法
  return {
    type: actionType.GET_TEXT_DETAIL, //action后返回出去 视图中的dispatch action
    data: fromJS(data)
  }
}
// 
function getDetail (id) { 
  return dispatch => {
    //携带动态参数
    // axios.get(`/textdetail?id=${id}`)
    axios.get(`/textdetail`)
    .then(res => {
      console.log(res.data);
      dispatch(_getDetail(res.data))
    })
    .catch(res => {
      console.log(res);
    })
  }
}


export default {
  getDetail // 暴露出去改视图调用
}
```

这里就一定看看`store/index.js`是这么协调数据的

````react
import actionCreators from './actionCreators'
import actionType from './actionType'
import reducer from './reducer'

export { reducer, actionType, actionCreators }
````

很简单,就是将单个`store`的入口统一了

上面的`actionCreators.js`导入了`actionType`

所以我们看看`store/actionType`写了什么数据

```react
export default  {
  GET_TEXT_DETAIL: "get_text_detail"
}
```

对,就是action的type的仓库,现在dispatch已经得到了action,reducer里面的就会接收到dispatch发送的action



```react
import { actionType } from './index'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  title: '',
  content: ``,
})


export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GET_TEXT_DETAIL:
    console.log(action.data);
      return state.merge({
        title: action.data.get('title'),
        content: action.data.get('content')
      })
    default:
      return state
  }
}
```

这里就是匹配type,我们的type都从一个地方获取的,保证了代码出现失误的几率,通过 state.merge() 改变多条数据,页面发生变化,这就完成了数据的变化 



虽然过程很复杂,但是明显感觉到,代码耦合性非常低,决定了这样会的项目结构可以完成比较大型的项目,

这里说的可能不是很清楚 可以看`github`上面的项目代码[从零开始简书项目](https://github.com/vkcyan/gotoReact-/tree/master/react-jianshu)

