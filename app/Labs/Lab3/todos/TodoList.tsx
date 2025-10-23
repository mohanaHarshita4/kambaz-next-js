"use client";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState<any[]>([]);

  useEffect(() => {
    import("@/data/todos.json", { assert: { type: "json" } })
      .then((data) => setTodos(data.default))
      .catch((err) => console.error("Error loading todos:", err));
  }, []);

  return (
    <>
      <h3>Todo List</h3>
      <ListGroup>
        {todos.map((todo, i) => (
          <TodoItem key={i} todo={todo} />
        ))}
      </ListGroup>
      <hr />
    </>
  );
}
