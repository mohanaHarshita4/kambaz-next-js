'use client';
import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);

  return (
    <div id="wd-todo-list-redux" className="p-3 border rounded bg-light mt-3">
      <h3>Todo List</h3>
      <ListGroup>
        {/*  Form for adding/updating todos */}
        <TodoForm />

        {/*  List each todo using TodoItem */}
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
