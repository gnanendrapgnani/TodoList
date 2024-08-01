import { createContext } from "react";
import { useReducer } from "react";

export const TodoWorks = createContext({
  todo: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

const todoReducer = (currTodo, action) => {
  let newTodo = currTodo;

  if (action.type === "NEW_TODO") {
    newTodo = [
      ...currTodo,
      { name: action.payload.task, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_TODO") {
    newTodo = currTodo.filter((task) => task.name !== action.payload.task);
  }
  return newTodo;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todo, dispatchTodo] = useReducer(todoReducer, []);

  const addTodo = (task, date) => {
    const newTodoAction = {
      type: "NEW_TODO",
      payload: {
        task,
        date,
      },
    };
    dispatchTodo(newTodoAction);
  };

  const deleteTodo = (task) => {
    const deleteTodoAction = {
      type: "DELETE_TODO",
      payload: {
        task: task,
      },
    };
    dispatchTodo(deleteTodoAction);
  };
  return (
    <TodoWorks.Provider value={{ todo, addTodo, deleteTodo }}>
      {children}
    </TodoWorks.Provider>
  );
};

export default TodoItemsContextProvider;
