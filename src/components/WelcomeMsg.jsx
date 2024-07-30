import style from "./WelcomeMsg.module.css";
import { useContext } from "react";
import { TodoWorks } from "../stores/todo-stores";

const WelcomeMsg = () => {
  const todoObj = useContext(TodoWorks);
  const todo = todoObj.todo;

  return (
    todo.length === 0 && <h3 className={style.msg}>No Task Enjoy the day</h3>
  );
};

export default WelcomeMsg;
