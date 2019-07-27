import { observable as obser, action } from 'mobx';

class Todo {
  id = Math.random();
  @obser title = '';
  @obser finished = false;
  constructor(title) {
    this.title = title;
  }
}

class TodoList {
  @obser todo = [1];
}

const todolist = new TodoList();
export default todolist;
