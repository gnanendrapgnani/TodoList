import style from "./TodoList.module.css";
import { MdDeleteOutline } from "react-icons/md";

function TodoList({ todo, onClickDelBtn }) {
  return (
    <>
      <div>
        {todo.map((item, index) => (
          <div className={style.list} key={index}>
            <div className={style.task}>{item.name}</div>
            <div className={style.date}>{item.date}</div>
            <button
              className={style.deltBtn}
              onClick={() => onClickDelBtn(item.name)}
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
