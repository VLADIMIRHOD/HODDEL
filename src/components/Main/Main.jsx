import React from "react"
import classes from './Style/Main.module.css'
import TaskList from "./task/TaskList"

function Main() {
  return (
    <main className={classes.Main}>
      <nav className={classes.Navbar}>
        <img className={classes.imgNavbar} src="./img/taskList.svg" alt="Список задач"/>
        <img className={classes.imgNavbar} src="./img/profile.svg" alt="Профиль"/>
        <img className={classes.imgNavbar} src="./img/info.svg" alt="Информация"/>
      </nav>
      <TaskList/>
    </main>
  )
}

export default Main
