import React, { useState } from "react";
import classes from './style/Task.module.css'
import Task from "./Task";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    {id: 1, name:"adebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyd", info:"rebusebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyt ntn tyn tyn tyn", complete: false},
    {id: 2, name:"bdd1", info:"rebust gwrgrt rrebust gwrgrt rh ytn tynh ytn tyn", complete: false},
    {id: 3, name:"bdd2", info: false , complete: false},
    {id: 4, name:"bdd3", info:"rebust gwrgrt rh ytn tyn", complete: true},
  ])
  return (
    <div className={classes.TasksList}>
        {tasks.map(task => {
          if(!task.complete) {
            return <Task task={task}/>
          }
        })}
    </div>
  )
}
