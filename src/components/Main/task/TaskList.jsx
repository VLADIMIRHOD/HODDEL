import React, { useState } from "react";
import classes from "./style/Task.module.css";
import Task from "./Task";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "adebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyd",
      info: "rebusebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyt ntn tyn tyn tyn",
      complete: false,
    },
    {
      id: 2,
      name: "bdd1",
      info: "rebust gwrgrt rrebust gwrgrt rh ytn tynh ytn tyn",
      complete: false,
    },
    { id: 3, name: "bdd2", info: false, complete: false },
    { id: 4, name: "bdd3", info: "rebust gwrgrt rh ytn tyn", complete: true },
    {
      id: 5,
      name: "adebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyd",
      info: "rebusebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyebust ntn tyn tyt ntn tyn tyn tyn",
      complete: false,
    },
    {
      id: 6,
      name: "bdd6",
      info: "rebust gwrgrt rrebust gwrgrt rh ytn tynh ytn tyn",
      complete: false,
    },
    { id: 7, name: "bdd7", info: false, complete: false },
  ]);

  const [task, setTask] = useState({ name: "", info: "" });

  const addNewTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { ...task, id: Date.now() }]);
    setTask({ name: "", info: "", complete: false });
  };

  const removeTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <div className={classes.TasksBlock}>
      <form>
        <div className={classes.Task}>
          <section className={classes.main}>
            <textarea
              type="text"
              value={task.name}
              placeholder="Название задачи"
              onChange={(e) =>
                setTask({ ...task, name: e.target.value, complete: false })
              }
            />
            <textarea
              type="text"
              value={task.info}
              placeholder="Описание задачи"
              onChange={(e) => setTask({ ...task, info: e.target.value })}
            />
          </section>
          <section className={classes.buttons}>
            <button className={classes.TaskNew} onClick={addNewTask}>
              &#10010;
            </button>
          </section>
        </div>
      </form>
      <div className={classes.TaskList}>
        {
        tasks.map(task => {
          if (!task.complete) {
            return <Task task={task} key={task.id} remove={removeTask} />;
          }
        })}
      </div>
    </div>
  );
}
