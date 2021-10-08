import React, { useState } from "react";
import classes from './style/Task.module.css'

export default function TaskList() {
  const [tasks, setTasks] = useState([
    {id: 1, name:"add", info:"rebust ntn tyn tyn tyn", complete: false},
    {id: 2, name:"bdd", info:"rebust gwrgrt rrebust gwrgrt rh ytn tynh ytn tyn", complete: false},
    {id: 3, name:"bdd", info: false , complete: false},
    {id: 4, name:"bdd", info:"rebust gwrgrt rh ytn tyn", complete: true},
  ])
  return (
    <div className={classes.TasksList}>
        {tasks.map(task => {
          if(!task.complete) {
            return (<div className={classes.Task}>
            <section>
              <h6>{task.name}</h6>
              {task.info ? <p>{task.info}</p> : ''}
            </section>
            <section>
              <button>&#10004;</button>
              <button>&#10006;</button>
            </section>
            </div>)
          }
        })}
    </div>
  )
}
