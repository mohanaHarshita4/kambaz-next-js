import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
  id: string;
  title: string;
}

interface TodosState {
  todos: Todo[];
  todo: Todo;
}

const initialState: TodosState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { id: "-1", title: "Learn Mongo" },
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      const newTodo: Todo = {
        ...action.payload,
        id: new Date().getTime().toString(),
      };
      state.todos.push(newTodo);
      state.todo = { id: "-1", title: "" };
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<string>) => {
      const found = state.todos.find((t) => t.id === action.payload);
      if (found) state.todo = found;
    },
    updateTodo: (state) => {
      state.todos = state.todos.map((t) =>
        t.id === state.todo.id ? { ...t, title: state.todo.title } : t
      );
      state.todo = { id: "-1", title: "" };
    },
    setTodo: (state, action: PayloadAction<Todo>) => {
      state.todo = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, editTodo, updateTodo, setTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
