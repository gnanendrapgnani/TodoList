import style from "./WelcomeMsg.module.css";

const WelcomeMsg = ({ todoList }) => {
  return (
    todoList.length === 0 && (
      <h3 className={style.msg}>No Task Enjoy the day</h3>
    )
  );
};

export default WelcomeMsg;
