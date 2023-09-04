import React,{useState} from 'react'

const TodoForm = ({addTodo}) => {
  const [valuee, setValue] = useState("");

  const handleSubmit = e =>{ 
    e.preventDefault();// kahortag in la refresh gareeyo pageka markii click lasii submitka kadib...
    // setValue=""

    addTodo(valuee);
    setValue("");  ///////////// in eber laga dhigo waxa ku jiro textboxga kadib markii click lasiiyo butotnka submit..
  }
  return (

    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' value={valuee} placeholder='what is the task today?'  onChange={(e)=> setValue (e.target.value) }   />
      <button type='submit' className='todo-btn'>Add task</button>

    </form>
    
  )
}

export default TodoForm
