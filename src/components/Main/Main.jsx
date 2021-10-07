import React, { useState } from "react"
import Week from "./task/week"
import classes from './Style/Main.module.css'

function Main() {
  return (
    <main className={classes.Main}>
      <nav className={classes.Navbar}>
        <img className={classes.imgNavbar} src="./img/taskList.svg" alt="Список задач"/>
      </nav>
      <div>
        <section>
          <Week/>
        </section>
      </div>
    </main>
  )
}

export default Main
