"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, FormControl, ListGroupItem } from "react-bootstrap";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <ListGroupItem>
      <div className="d-flex gap-2">
        <FormControl
          value={todo.title}
          placeholder="Enter Todo"
          onChange={(e) =>
            dispatch(setTodo({ ...todo, title: e.target.value }))
          }
        />
        {todo.id === "-1" ? (
          <Button
            id="wd-add-todo-click"
            variant="success"
            onClick={() => dispatch(addTodo(todo))}
          >
            Add
          </Button>
        ) : (
          <Button
            id="wd-update-todo-click"
            variant="warning"
            onClick={() => dispatch(updateTodo())}
          >
            Update
          </Button>
        )}
      </div>
    </ListGroupItem>
  );
}
