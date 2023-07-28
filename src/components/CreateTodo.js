import { useState } from "react";

function CreateTodos ({ onCreate }){
  
  const [task, setTask] = useState('');
  
  const handleChange = (e)=>{
    setTask(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    onCreate(task);
    setTask('');
  }
  
  
  return (
    // <div className="block">
    //   <div className="card">
    //     <h2>ToDo List</h2>
    //     <form onSubmit={handleSubmit} >
    //       <input value={task} type="text" onChange={handleChange} className="" placeholder="Add a ToDo"/>
    //       <button>Save</button>
    //     </form>
    //   </div>
    // </div>
    <div>
      <header>ToDo List</header>
      <div className="card">
        <form onSubmit={handleSubmit}>
          <h4>Add a Task</h4>
          <input value={task} type="text" placeholder="ToDo" onChange={handleChange} spellCheck={false}/><br />
          <button className="task-btn">Add</button>
        </form>
      </div>
    </div>
  )
}

export default CreateTodos;