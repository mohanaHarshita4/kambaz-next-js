"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { Button, ListGroupItem } from "react-bootstrap";
import { deleteTodo, editTodo } from "./todosReducer";

export default function TodoItem({ todo }: any) {
  const dispatch = useDispatch();

  return (
    <ListGroupItem
      key={todo.id}
      className="d-flex justify-content-between align-items-center"
    >
      {todo.title}
      <div>
        <Button
          id="wd-set-todo-click"
          variant="primary"
          size="sm"
          className="me-2"
          onClick={() => dispatch(editTodo(todo.id))}
        >
          Edit
        </Button>
        <Button
          id="wd-delete-todo-click"
          variant="danger"
          size="sm"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          Delete
        </Button>
      </div>
    </ListGroupItem>
  );
}
