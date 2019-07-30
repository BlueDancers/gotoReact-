import React, { useEffect } from 'react';

function TodoItem(props) {
  return <div>{props.todo.title}</div>;
}

export default TodoItem;
