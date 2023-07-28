import { Trash } from 'lucide-react';
// import { PinOff } from 'lucide-react';

function TodoShow ({ todo, onDelete }){


  const handleDeleteClick =()=>{
    onDelete(todo.id)
  }

  return(
    <div>
      <div className='tasks'>
        <div className='trash'>
          <Trash onClick={handleDeleteClick}/>
        </div>
        <div className='tasks-1' >
          {todo.task}
        </div>
      </div>
        <div className="line-gradient"></div>
        {/* <button onClick={handleDeleteClick}>Delete</button> */}
        
        {/* <Pin />
        <PinOff /> */}
      
    </div>
  )
}

export default TodoShow;