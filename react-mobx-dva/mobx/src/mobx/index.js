import {
  spy,
  trace,
  toJS,
  observe,
  observable as obser,
  action,
  computed
} from 'mobx';

// spy 可以监听到所有数据的变化,开发环境慎用
// spy(event => {
//   console.log(event);
// });

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
  disposres = [];

  constructor() {
    observe(this.todo, change => {
      this.disposres.forEach(disposres => disposres());
      this.disposres = [];
      for (const todo of change.object) {
        var disposer = observe(todo, changex => {
          // console.log(changex);
          this.save();
        });
        this.disposres.push(disposer);
      }
      // console.log(change);
      this.save();
    });
  }
  save() {
    console.log(toJS(this.todo));
  }
  @action.bound createTodo(title) {
    this.todo.unshift(new Todo(title));
  }
  @action.bound changeStatus(id) {
    this.todo.map(e => {
      if (e.id === id) e.finished = !e.finished;
      return true;
    });
  }
  @action.bound deleteTodo(id) {
    let todo = [];
    this.todo.map(e => {
      if (e.id !== id) todo.push(e);
      return true;
    });
    this.todo = todo;
  }
  @computed get left() {
    return this.todo.filter(i => !i.finished).length;
  }
  @computed get right() {
    return this.todo.filter(i => i.finished).length;
  }
}

export default new TodoList();
