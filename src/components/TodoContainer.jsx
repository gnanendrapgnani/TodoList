import style from "./TodoContainer.module.css";
import TodoHeading from "./TodoHeading";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import WelcomeMsg from "./WelcomeMsg";
import { useState } from "react";
import { TodoWorks } from "../stores/todo-stores";

function TodoContainer() {
  const [todo, setTodo] = useState([]);

  const addTodo = (task, date) => {
    setTodo((currValue) => [...currValue, { name: task, date: date }]);
  };

  const deleteTodo = (todoTask) => {
    const newTask = todo.filter((task) => task.name !== todoTask);
    setTodo(newTask);
  };

  return (
    <TodoWorks.Provider value={{ todo, addTodo, deleteTodo }}>
      <div className={style.container}>
        <TodoHeading />
        <TodoAdd />
        <WelcomeMsg />
        <TodoList />
      </div>
    </TodoWorks.Provider>
  );
}

export default TodoContainer;
