import style from "./TodoContainer.module.css";
import TodoHeading from "./TodoHeading";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import WelcomeMsg from "./WelcomeMsg";
import { useState } from "react";

function TodoContainer() {
  const [todo, setTodo] = useState([]);

  const handleNewItem = (task, date) => {
    const newTask = [...todo, { name: task, date: date }];
    setTodo(newTask);
  };

  const handlerDeletBtn = (todoTask) => {
    const newTask = todo.filter((task) => task.name !== todoTask);
    setTodo(newTask);
  };

  return (
    <>
      <div className={style.container}>
        <TodoHeading />
        <TodoAdd onNewItem={handleNewItem} />
        {todo.length === 0 && <WelcomeMsg />}
        <TodoList todo={todo} onClickDelBtn={handlerDeletBtn} />
      </div>
    </>
  );
}

export default TodoContainer;
