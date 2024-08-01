import style from "./TodoContainer.module.css";
import TodoHeading from "./TodoHeading";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import WelcomeMsg from "./WelcomeMsg";
import TodoItemsContextProvider from "../stores/todo-stores";

function TodoContainer() {
  return (
    <TodoItemsContextProvider>
      <div className={style.container}>
        <TodoHeading />
        <TodoAdd />
        <WelcomeMsg />
        <TodoList />
      </div>
    </TodoItemsContextProvider>
  );
}

export default TodoContainer;
