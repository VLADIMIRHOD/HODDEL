import React from "react";
import classes from "./Style/Main.module.css";
import TaskList from "./task/TaskList";

function Main() {
  return (
    <main className={classes.Main}>
      <nav className={classes.Navbar}>
        <img
          className={classes.imgNavbar}
          src="./img/list.svg"
          alt="список задач"
        />
        <img
          className={classes.imgNavbar}
          src="./img/setting.svg"
          alt="Настройки"
        />
      </nav>
      <TaskList />
    </main>
  );
}

export default Main;
