var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}
function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
} /** @jsx DiyReact.createElement */

var DiyReact = importFromBelow()

var randomLikes = function randomLikes() {
  return Math.ceil(Math.random() * 100)
}

var stories = [
  { name: 'DiyReact介绍', url: 'http://google.com', likes: randomLikes() },
  {
    name: 'Rendering DOM elements ',
    url: 'http://google.com',
    likes: randomLikes()
  },
  {
    name: 'Element creation and JSX',
    url: 'http://google.com',
    likes: randomLikes()
  },
  {
    name: 'Instances and reconciliation',
    url: 'http://google.com',
    likes: randomLikes()
  },
  {
    name: 'Components and state',
    url: 'http://google.com',
    likes: randomLikes()
  }
]
var App = (function(_DiyReact$Component) {
  _inherits(App, _DiyReact$Component)
  function App() {
    _classCallCheck(this, App)
    return _possibleConstructorReturn(
      this,
      (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments)
    )
  }
  _createClass(App, [
    {
      key: 'render',
      value: function render() {
        return DiyReact.createElement(
          'div',
          null,
          DiyReact.createElement('h1', null, 'DiyReact Stories'),
          DiyReact.createElement(
            'ul',
            null,
            this.props.stories.map(function(story) {
              return DiyReact.createElement(Story, {
                name: story.name,
                url: story.url
              })
            })
          )
        )
      }
    },
    {
      key: 'componentWillMount',
      value: function componentWillMount() {
        console.log('execute componentWillMount')
      }
    },
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log('execute componentDidMount')
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        console.log('execute componentWillUnmount')
      }
    }
  ])
  return App
})(DiyReact.Component)
var Story = (function(_DiyReact$Component2) {
  _inherits(Story, _DiyReact$Component2)
  function Story(props) {
    _classCallCheck(this, Story)
    var _this2 = _possibleConstructorReturn(
      this,
      (Story.__proto__ || Object.getPrototypeOf(Story)).call(this, props)
    )
    _this2.state = { likes: Math.ceil(Math.random() * 100) }
    return _this2
  }
  _createClass(Story, [
    {
      key: 'like',
      value: function like() {
        this.setState({
          likes: this.state.likes + 1
        })
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this3 = this
        var _props = this.props,
          name = _props.name,
          url = _props.url
        var likes = this.state.likes
        var likesElement = DiyReact.createElement('span', null)
        return DiyReact.createElement(
          'li',
          null,
          DiyReact.createElement(
            'button',
            {
              onClick: function onClick(e) {
                return _this3.like()
              }
            },
            likes,
            DiyReact.createElement('b', null, '\u2764\uFE0F')
          ),
          DiyReact.createElement('a', { href: url }, name)
        )
      }

      // shouldcomponentUpdate() {
      //   return true;
      // }
    },
    {
      key: 'componentWillUpdate',
      value: function componentWillUpdate() {
        console.log('execute componentWillUpdate')
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        console.log('execute componentDidUpdate')
      }
    }
  ])
  return Story
})(DiyReact.Component)

DiyReact.render(
  DiyReact.createElement(App, { stories: stories }),
  document.getElementById('root')
)

/* 🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼🌼 */

function importFromBelow() {
  var TEXT_ELEMENT = 'TEXT_ELEMENT'

  function updateDomProperties(dom, prevProps, nextProps) {
    var isEvent = function isEvent(name) {
      return name.startsWith('on')
    }
    var isAttribute = function isAttribute(name) {
      return !isEvent(name) && name != 'children'
    }

    // Remove event listeners
    Object.keys(prevProps)
      .filter(isEvent)
      .forEach(function(name) {
        var eventType = name.toLowerCase().substring(2)
        dom.removeEventListener(eventType, prevProps[name])
      })

    // Remove attributes
    Object.keys(prevProps)
      .filter(isAttribute)
      .forEach(function(name) {
        dom[name] = null
      })

    // Set attributes
    Object.keys(nextProps)
      .filter(isAttribute)
      .forEach(function(name) {
        dom[name] = nextProps[name]
      })

    // Add event listeners
    Object.keys(nextProps)
      .filter(isEvent)
      .forEach(function(name) {
        var eventType = name.toLowerCase().substring(2)
        dom.addEventListener(eventType, nextProps[name])
      })
  }

  var rootInstance = null
  function render(element, parentDom) {
    var prevInstance = rootInstance
    var nextInstance = reconcile(parentDom, prevInstance, element)
    rootInstance = nextInstance
  }

  function reconcile(parentDom, instance, element) {
    if (instance === null) {
      var newInstance = instantiate(element)
      // componentWillMount
      newInstance.publicInstance &&
        newInstance.publicInstance.componentWillMount &&
        newInstance.publicInstance.componentWillMount()
      parentDom.appendChild(newInstance.dom)
      // componentDidMount
      newInstance.publicInstance &&
        newInstance.publicInstance.componentDidMount &&
        newInstance.publicInstance.componentDidMount()
      return newInstance
    } else if (element === null) {
      // componentWillUnmount
      instance.publicInstance &&
        instance.publicInstance.componentWillUnmount &&
        instance.publicInstance.componentWillUnmount()
      parentDom.removeChild(instance.dom)
      return null
    } else if (instance.element.type !== element.type) {
      var _newInstance = instantiate(element)
      // componentDidMount
      _newInstance.publicInstance &&
        _newInstance.publicInstance.componentDidMount &&
        _newInstance.publicInstance.componentDidMount()
      parentDom.replaceChild(_newInstance.dom, instance.dom)
      return _newInstance
    } else if (typeof element.type === 'string') {
      updateDomProperties(instance.dom, instance.element.props, element.props)
      instance.childInstances = reconcileChildren(instance, element)
      instance.element = element
      return instance
    } else {
      if (
        instance.publicInstance &&
        instance.publicInstance.shouldcomponentUpdate
      ) {
        if (!instance.publicInstance.shouldcomponentUpdate()) {
          return
        }
      }
      // componentWillUpdate
      instance.publicInstance &&
        instance.publicInstance.componentWillUpdate &&
        instance.publicInstance.componentWillUpdate()
      instance.publicInstance.props = element.props
      var newChildElement = instance.publicInstance.render()
      var oldChildInstance = instance.childInstance
      var newChildInstance = reconcile(
        parentDom,
        oldChildInstance,
        newChildElement
      )
      // componentDidUpdate
      instance.publicInstance &&
        instance.publicInstance.componentDidUpdate &&
        instance.publicInstance.componentDidUpdate()
      instance.dom = newChildInstance.dom
      instance.childInstance = newChildInstance
      instance.element = element
      return instance
    }
  }

  function reconcileChildren(instance, element) {
    var dom = instance.dom,
      childInstances = instance.childInstances
    var newChildElements = element.props.children || []
    var count = Math.max(childInstances.length, newChildElements.length)
    var newChildInstances = []
    for (var i = 0; i < count; i++) {
      newChildInstances[i] = reconcile(
        dom,
        childInstances[i],
        newChildElements[i]
      )
    }
    return newChildInstances.filter(function(instance) {
      return instance !== null
    })
  }

  function instantiate(element) {
    var type = element.type,
      _element$props = element.props,
      props = _element$props === undefined ? {} : _element$props

    var isDomElement = typeof type === 'string'

    if (isDomElement) {
      // 创建dom
      var isTextElement = type === TEXT_ELEMENT
      var dom = isTextElement
        ? document.createTextNode('')
        : document.createElement(type)

      // 设置dom的事件、数据属性
      updateDomProperties(dom, [], element.props)
      var children = props.children || []
      var childInstances = children.map(instantiate)
      var childDoms = childInstances.map(function(childInstance) {
        return childInstance.dom
      })
      childDoms.forEach(function(childDom) {
        return dom.appendChild(childDom)
      })
      var instance = {
        element: element,
        dom: dom,
        childInstances: childInstances
      }
      return instance
    } else {
      var _instance = {}
      var publicInstance = createPublicInstance(element, _instance)
      var childElement = publicInstance.render()
      var childInstance = instantiate(childElement)
      Object.assign(_instance, {
        dom: childInstance.dom,
        element: element,
        childInstance: childInstance,
        publicInstance: publicInstance
      })
      return _instance
    }
  }

  function createTextElement(value) {
    return createElement(TEXT_ELEMENT, { nodeValue: value })
  }

  function createElement(type, props) {
    var _ref
    props = Object.assign({}, props)
    for (
      var _len = arguments.length,
        children = Array(_len > 2 ? _len - 2 : 0),
        _key = 2;
      _key < _len;
      _key++
    ) {
      children[_key - 2] = arguments[_key]
    }
    props.children = (_ref = []).concat
      .apply(_ref, children)
      .filter(function(child) {
        return child != null && child !== false
      })
      .map(function(child) {
        return child instanceof Object ? child : createTextElement(child)
      })
    return { type: type, props: props }
  }

  function createPublicInstance(element, instance) {
    var type = element.type,
      props = element.props
    var publicInstance = new type(props)
    publicInstance.__internalInstance = instance
    return publicInstance
  }
  var Component = (function() {
    function Component(props) {
      _classCallCheck(this, Component)
      this.props = props
      this.state = this.state || {}
    }
    _createClass(Component, [
      {
        key: 'setState',
        value: function setState(partialState) {
          this.state = Object.assign({}, this.state, partialState)
          // update instance
          var parentDom = this.__internalInstance.dom.parentNode
          var element = this.__internalInstance.element
          reconcile(parentDom, this.__internalInstance, element)
        }
      }
    ])
    return Component
  })()

  return {
    render: render,
    createElement: createElement,
    Component: Component
  }
}
