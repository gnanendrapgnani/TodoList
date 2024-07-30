import style from "./TodoList.module.css";
import { MdDeleteOutline } from "react-icons/md";
import { TodoWorks } from "../stores/todo-stores";
import { useContext } from "react";

function TodoList() {
  const { deleteTodo } = useContext(TodoWorks);
  const todoObj = useContext(TodoWorks);
  const todo = todoObj.todo;

  return (
    <>
      <div>
        {todo.map((item, index) => (
          <div className={style.list} key={index}>
            <div className={style.task}>{item.name}</div>
            <div className={style.date}>{item.date}</div>
            <button
              className={style.deltBtn}
              onClick={() => deleteTodo(item.name)}
            >
              <MdDeleteOutline />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
