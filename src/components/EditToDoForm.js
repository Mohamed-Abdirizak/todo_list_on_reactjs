import React,{useState} from 'react'

const EditTodoForm = ({editTodo, task}) => {
  const [valuee, setValue] = useState(task.task);

  const handleSubmit = e =>{ 
    e.preventDefault();// kahortag in la refresh gareeyo pageka markii click lasii submitka kadib...
    // setValue=""

    editTodo(valuee, task.id);
    setValue("");  ///////////// in eber laga dhigo waxa ku jiro textboxga kadib markii click lasiiyo butotnka submit..
  }
  return (

    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={valuee} placeholder='Update Task'  onChange={(e)=> setValue (e.target.value) }   />
      <button type='submit' className='todo-btn'>Update Task</button>

    </form>
    
  )
}

export default EditTodoForm
