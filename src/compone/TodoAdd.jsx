import { useState } from "react";
import style from "./TodoAdd.module.css";
import { MdFormatListBulletedAdd } from "react-icons/md";

function TodoAdd({ onNewItem }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const handlerText = (event) => {
    setTask(event.target.value);
  };

  const handlerDate = (event) => {
    setDate(event.target.value);
  };

  const handlerAddBtn = () => {
    if (task === "") {
      alert("Give task to add in Todo");
    } else {
      onNewItem(task, date);
      setTask("");
      setDate("");
    }
  };

  return (
    <div className={style.todoAddContainer}>
      <input
        className={style.task}
        type="text"
        placeholder="Enter the task here"
        value={task}
        onChange={handlerText}
      />
      <input
        className={style.date}
        type="date"
        value={date}
        onChange={handlerDate}
      />
      <button className={style.addBtn} onClick={handlerAddBtn}>
        <MdFormatListBulletedAdd />
      </button>
    </div>
  );
}

export default TodoAdd;
