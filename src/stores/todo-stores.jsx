import { createContext } from "react";

export const TodoWorks = createContext({
  todo: [],
  addTodo: () => {},
  deleteTodo: () => {},
});
