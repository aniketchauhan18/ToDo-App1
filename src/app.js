import { useEffect, useState } from "react";
import axios from "axios";
import CreateTodos from "./components/CreateTodo";
import TodoList from "./components/TodoList";

function App(){

  const [todos, setTodos] = useState([]);
  
  const fetchTodos = async()=>{
    const response = await axios.get("http://127.0.0.1:3001/todos");

    setTodos(response.data);
  }

  useEffect(()=>{
    fetchTodos();
  }, []);

  const deleteTodosById = async (id)=>{
    await axios.delete(`http://127.0.0.1:3001/todos/${id}`);
    
    const updatedTodos = todos.filter((todo)=>{
      return todo.id !==id; // FKT
    })

    setTodos(updatedTodos);
  }
  
  
  const createTodos = async(task) =>{
    
    const response = await axios.post("http://127.0.0.1:3001/todos",{
      task,
    });
    
    const updatedTodos = [
      ...todos,
      response.data
    ]

    setTodos(updatedTodos);
    

    // const updatedTodos = [
    //   ...todos,
    //   {
    //     id: Math.floor(Math.random() * 10000),
    //     task
    //   }
    // ]
    // setTodos(updatedTodos);
  }

  return(
    <div>
      <CreateTodos onCreate={createTodos} />
      <TodoList todos={todos} onDelete={deleteTodosById}/>
    </div>
  )
}

export default App;