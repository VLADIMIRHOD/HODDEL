import React, { useState } from "react";
import DayWeek from "./DayWeek"
import './style/week.css'

function Week() {
  const [dayOfWeek, setDayOfWeek] = useState([
    {id: 1, name:"Понедельник"},
    {id: 2, name:"Вторник"},
    {id: 3, name:"Среда"},
    {id: 4, name:"Четверг"},
    {id: 5, name:"Пятница"},
    {id: 6, name:"Суббота"},
    {id: 7, name:"Воскресенье"},
  ])
  return (
    <div className="tasks">
        {dayOfWeek.map(day =>
          <DayWeek day={day}/>
          )}
    </div>
  )
}
export default Week