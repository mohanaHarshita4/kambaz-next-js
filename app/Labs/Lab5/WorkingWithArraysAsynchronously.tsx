"use client";

import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, FormControl } from "react-bootstrap";
import * as client from "./client";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import { FaPencil } from "react-icons/fa6";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchTodos = async () => {
    const data = await client.fetchTodos();
    setTodos(data);
  };

  const createNewTodo = async () => {
    const data = await client.createNewTodo();
    setTodos(data);
  };

  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };

  const removeTodo = async (todo: any) => {
    const data = await client.removeTodo(todo); // NO error
    setTodos(data);
  };

  const editTodo = (todo: any) => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...todo, editing: true } : t
      )
    );
  };

  const deleteTodo = async (todo: any) => {
  try {
    await client.deleteTodo(todo);
    setTodos(todos.filter((t) => t.id !== todo.id));
    setErrorMessage(null); 
  } catch (error: any) {
    console.log("Error caught:", error); 
    setErrorMessage(error.response.data.message);
    setTimeout(() => setErrorMessage(null), 5000);
  }
};

const updateTodo = async (todo: any) => {
  try {
    await client.updateTodo(todo);
    setTodos(todos.map((t) => (t.id === todo.id ? { ...todo, editing: false } : t)));
    setErrorMessage(null); 
  } catch (error: any) {
    console.log("Error caught:", error); 
    setErrorMessage(error.response.data.message);
    setTodos(todos.map((t) => (t.id === todo.id ? { ...t, editing: false } : t)));
    setTimeout(() => setErrorMessage(null), 5000);
  }
};

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>

      {errorMessage && (
        <div
          id="wd-todo-error-message"
          className="alert alert-danger mb-2 mt-2"
        >
          {errorMessage}
        </div>
      )}

      <h4>
        Todos
        <FaPlusCircle
          onClick={createNewTodo}
          className="text-success float-end fs-3"
        />
        <FaPlusCircle
          onClick={postNewTodo}
          className="text-primary float-end fs-3 me-3"
        />
      </h4>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>
            <FaTrash
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              className="text-danger float-end me-2 fs-3"
            />
            <FaPencil
              onClick={() => editTodo(todo)}
              className="text-primary float-end me-2 mt-1"
            />

            <input
              type="checkbox"
              defaultChecked={todo.completed}
              className="form-check-input me-2 float-start"
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />

            {!todo.editing ? (
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            ) : (
              <FormControl
                className="w-50 float-start"
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
                onChange={(e) =>
                  updateTodo({
                    ...todo,
                    title: (e.target as HTMLInputElement).value,
                  })
                }
              />
            )}
          </ListGroupItem>
        ))}
      </ListGroup>

      <hr />
    </div>
  );
}
