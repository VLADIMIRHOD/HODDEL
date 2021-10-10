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
              <input type="text" value={task.name}/>
              {task.info ? <input type="text" value={task.info}/> : ''}
            </section>
            <section>
              <button className={classes.TaskComplete}>&#10004;</button>
              <button className={classes.TaskDelete}>&#10006;</button>
            </section>
            </div>)
          }
        })}
    </div>
  )
}
