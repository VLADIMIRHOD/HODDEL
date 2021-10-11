import React, { useState } from "react";
import classes from './style/Task.module.css'
import Task from "./Task";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    {id: 1, name:"adebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyd", info:"rebusebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyt ntn tyn tyn tyn", complete: false},
    {id: 2, name:"bdd1", info:"rebust gwrgrt rrebust gwrgrt rh ytn tynh ytn tyn", complete: false},
    {id: 3, name:"bdd2", info: false , complete: false},
    {id: 4, name:"bdd3", info:"rebust gwrgrt rh ytn tyn", complete: true},
    {id: 5, name:"adebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyd", info:"rebusebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyt ntn tyn tyn tyn", complete: false},
    {id: 6, name:"bdd6", info:"rebust gwrgrt rrebust gwrgrt rh ytn tynh ytn tyn", complete: false},
    {id: 7, name:"bdd7", info: false , complete: false}
  ])

  const [newTaskName, setNewTaskName] = useState('')
  const [newTaskInfo, setNewTaskInfo] = useState('')

  const addNewTask = () => {
    console.log(newTaskName, newTaskInfo)
  }

  return (
    <div className={classes.TasksList}>
    <div className={classes.Task}>
        <section className={classes.main}>
          <textarea 
            type="text"
            value={newTaskName}
            placeholder="Название задачи"
            onChange={event => setNewTaskName(event.target.value)}
          />
          <textarea 
            type="text"
            value={newTaskInfo}
            placeholder="Описание задачи"
            onChange={event => setNewTaskInfo(event.target.value)} 
          />
        </section>
        <section className={classes.buttons}>
          <button className={classes.TaskNew} onClick={addNewTask}>Добавить</button>
        </section>
      </div>
        {tasks.map(task => {
          if(!task.complete) {
            return <Task task={task} key={task.id}/>
          }
        })}
    </div>
  )
}
