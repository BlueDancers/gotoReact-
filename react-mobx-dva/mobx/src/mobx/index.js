import { observable as obser, action, computed } from 'mobx';

class Todo {
  id = Math.random();
  @obser title = '';
  @obser finished = false;
  constructor(title) {
    this.title = title;
  }
}

class TodoList {
  // 监听元素
  @obser todo = [];
  @action.bound createTodo(title) {
    // 遍历方法
    this.todo.unshift(new Todo(title));
  }
  @computed get left() {
    // 计算属性
    return this.todo.filter(i => !this.todo.finished).length;
  }
}

export default new TodoList();
