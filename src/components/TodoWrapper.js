import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4}from 'uuid'
import Todo from './Todo';
import EditTodoForm from './EditToDoForm';
uuidv4();
const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  /////////////// functionkaani wuxuu parameter ahaan ugu wacan yahay todoFormka.................................
  const addTodo = todo =>{
    setTodos([...todos, {id: uuidv4(), task:todo, completed: false, isEditing: false}])
    console.log(todos)
  }
  /////////////////////////////////// halkaani ayuu ku egyahay funtinkii parameter ahaan loogu wacay ee kaimaaday  todoForm................
  const toggleComplete = id =>{
    setTodos(todos.map(todo => todo.id === id ?{...todo, completed: !todo.completed}: todo))
  }
  const deleteTodo = id =>{
    setTodos(todos.filter(todo =>todo.id !==id))
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id? {
      ... todo, isEditing : !todo.isEditing} : todo
    ))
  }

  const editTask = (task, id) =>{
    setTodos(todos.map(todo => todo.id === id ? {
      ...todo, task, isEditing: !todo.isEditing} : todo

    ))

  }


  return (
    <div className='TodoWrapper'>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo,index)=>(
          todo.isEditing ? (<EditTodoForm editTodo={editTask} task={todo} />) : (
            <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo ={deleteTodo}  editTodo={editTodo}   /> //taskska cusub meeshan ayaa heeeso lasoco waraa badow yahoooow, hahilmaamin yaaaaaah. ):

          )
          
        ))}

      
    </div>
  )
}

export default TodoWrapper
