import TodoShow from "./TodoShow";
import { useState, useEffect } from "react";
import { CalendarDays } from 'lucide-react';

function TodoList ({ todos, onDelete , onEdit}){
  const [currentDay, setCurrentDay] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');

  
  const listOfTodos = todos.map((todo)=>{
    return (
      <TodoShow key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit}/>
    )
  })


  useEffect(()=>{
    const getCurrentDay = ()=>{
      const days  = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
      const currentDate = new Date();
      const dayIndex = currentDate.getDay();
      
      return days[dayIndex];
    }
    setCurrentDay(getCurrentDay());

    const getCurrentDate = ()=>{
      const day = new Date().getDate();

      return day;
    }

    setCurrentDate(getCurrentDate);

    const getCurrentMonth = ()=>{

      const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ];
  
      const monthsIndex = new Date().getMonth();
      return months[monthsIndex];
    }
    setCurrentMonth(getCurrentMonth);
  })

  
  
  return(
    <div>
      <div>
        <div className="current">
          <CalendarDays className="calendar-icon"/>
          <div className="day">
            {currentDay}
          </div>
          <div className="day">
            {currentDate}
          </div>
          <div className="day">
            {currentMonth}
          </div>
        </div>
        <div className="line-gradient-1"></div>
      </div>
      
      <div className="todo-list">
      {listOfTodos}
      </div>
    </div>
    
  )
}

export default TodoList;