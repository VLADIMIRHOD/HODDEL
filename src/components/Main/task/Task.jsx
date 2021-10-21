import React, { useState } from "react";
import classes from './style/Task.module.css'

function Task(props) {
  const [name, setName] = useState(props.task.name)
  const [info, setInfo] = useState(props.task.info)
  
  return (
    <div className={classes.Task}>
      <section className={classes.main}>
        <textarea 
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
        <textarea 
          type="text"
          value={info}
          onChange={event => setInfo(event.target.value)} 
        />
      </section>
      <section className={classes.buttons}>
        <button className={classes.TaskComplete}>&#10004;</button>
        <button className={classes.TaskDelete} onClick={() => props.remove(props.task)}>&#10006;</button>
      </section>
      </div>
  )
}
export default Task
