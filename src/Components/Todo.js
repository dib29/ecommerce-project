import React from "react";
import TodoItems from "./TodoItems";

export default function Todo(props) {
  return (
    <div className="container">
      <h3 className="text-center">Todos List</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <TodoItems todo={todo} key={todo.id} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
