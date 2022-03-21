import React, {useState, useRef} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'




function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] =  useState({
        id: null,
        value: ''
    })


        const submitUpdate = value => {
            updateTodo(edit.id, value)
            setEdit({
              id: null,
              value: ''
            })
        }




        if (edit.id) {
            return <TodoForm edit={edit} onSuubmit= {submitUpdate} 
             />
        }

        if (!edit.id) {
           
        }

        

       
  return todos.map((todo, index) => (
      <div className=   {todo.isComplete ? 'complete-todo todo-row '  :
      ' todo-row'  } key={index}  >

          <div  className=' row todo-contents' key={todo.id} onClick={()=> completeTodo(todo.id)}>

          <div  className=' col s10   todo-text'>
             {todo.text}
          </div>
             </div>
       
           
            <div className='icons_match '>
            <span className='z-index-2right-align   react-icons'>
                <RiCloseCircleLine 
                onClick={() => removeTodo(todo.id)}
                className='remove-icon white-text text-darken-4'
                />
                <TiEdit  onClick={() => setEdit({id: todo.id, 
                value: todo.text})}
                className='edit-icon white-text'
                />
            </span>
            </div>
            

            
           
            
          </div>
  ))
}

export default Todo
