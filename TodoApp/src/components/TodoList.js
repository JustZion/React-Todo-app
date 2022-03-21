import React, {useState, useEffect, useRef} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {


   
    const [todos, setTodos] = useState([]);

    const [todoos, setTodoos] = useState(344)

    const addtodo = todo => {
        if ( !todo.text || /^\s*$/.test(todo.text)) {

            return
        }

        const newTodos = [todo, ...todos]
      //  console.log(newTodos)
        const her = [ {id: 34, text: 'testimony'}]

       

        setTodos(newTodos)
        
    }

    const refocus =(e) => {
      return e.current.blur()
    }

    const updateTodo = (todoId , newVal) => {
      if ( !newVal.text || /^\s*$/.test(newVal.text)) {

        return
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newVal : item)))
    }

    const removeTodo = id => {
     
      const removeArr = [...todos].filter(todo => todo.id !== id)

    const pop =  [ {id: 34, text: 'testimony'}]

      setTodos(removeArr)
    
     
      
        
     
     
      
    };

    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id ) {
          todo.isComplete = !todo.isComplete
        }
     
        return todo
      })
      setTodos(updatedTodos)
    }
  return (
    <div className='cover-all'>
     <h4 className='center-align form-header'>Write your plans for the Day !</h4>
      <TodoForm onSuubmit={addtodo}   />
      <Todo todos = {todos} completeTodo = {completeTodo} 
      removeTodo = {removeTodo} updateTodo = {updateTodo} />
    
    <div className=' center-align bottom-text'>A  <span className='green-text text-lighten-2'>React webApp 
    </span> Designed and developed by &nbsp;
     
     <a href='https://www.github.com/justZion' className='yellow-text  text-lighten-1 g-link'>JustZion</a>    </div>

</div>
)
  }

export default TodoList
