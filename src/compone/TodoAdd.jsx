import { useRef } from "react";
import style from "./TodoAdd.module.css";
import { MdFormatListBulletedAdd } from "react-icons/md";

function TodoAdd({ onNewItem }) {
  const todoTask = useRef();
  const dueDate = useRef();

  const handlerAddBtn = (event) => {
    event.preventDefault();
    if (todoTask.current.value === "" || dueDate.current.value === "") {
      alert("Give task to add in Todo");
    } else {
      const task = todoTask.current.value;
      const date = dueDate.current.value;
      todoTask.current.value = "";
      dueDate.current.value = "";
      onNewItem(task, date);
    }
  };

  return (
    <form className={style.todoAddContainer} onSubmit={handlerAddBtn}>
      <input
        className={style.task}
        type="text"
        placeholder="Enter the task here"
        ref={todoTask}
      />
      <input className={style.date} type="date" ref={dueDate} />
      <button type="submit" className={style.addBtn}>
        <MdFormatListBulletedAdd />
      </button>
    </form>
  );
}

export default TodoAdd;
