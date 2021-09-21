import React from 'react'
import InputTask from './InputTask'
import './style/DayWeek.css'

function DayWeek(props) {
  const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  let now = new Date();
  return (
          <div className="tasks__day">
              <p className="task__dayWeek">{props.day.name}</p>
              <p className="task__dayMonth">{months[now.getMonth()]}</p>
              <InputTask/>
              <InputTask/>
              <InputTask/>
              <InputTask/>
              <InputTask/>
          </div>
  )
}
export default DayWeek
