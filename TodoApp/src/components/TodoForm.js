import React, {useState, useEffect, useRef} from 'react'
import Todo from './Todo'

function TodoForm(props) {
  const [ input, setInput] = useState(props.edit ? props.edit.value : '')


  const [ timer, seTimer] = useState(0)
  const focus = useRef(null)
  

  useEffect(() => {
    if (timer == 0) {
      focus.current.focus();
      seTimer(1)

      console.log(timer)
    }
   
  })

 

  const handleSubmit = e => {
    e.preventDefault();

      props.onSuubmit({
        
        id: Math.floor(Math.random() * 10000),
        text: input
        

    })

   
   
    
    setInput('')
    }

    const handleChange = e => {
        setInput(e.target.value)

  

   
    
  }
  return (

   <form className=' row todo-form' onSubmit={handleSubmit}>
     {props.edit ? 
     (
      <>
      <input 
      type="text"
      placeholder='Update Todo'
      value={input}
      name='text'
      className='todo-input col s7 l8 push-l1 push-s1'
      onChange={handleChange}
      ref = {focus}
     />

     <button className='col s2 push-s1 l1 push-l1 waves-effect waves-light  button-enter button-update btn e todo-button'>Update</button>
     </>
     ) :  (
       <>
        <input 
      type="text"
      placeholder='Enter a text'
      value={input}
      name='text'
      className='todo-input col s7 l8 push-l1 push-s1'
      onChange={handleChange}
      ref = {focus}
     />
  
     <button className='col s2 push-s1 l1 push-l1 waves-effect waves-light  button-enter btn e todo-button'>Add text</button>
     </>
     )



    
    }
     
      
   </form>
    

  
  )
}

export default TodoForm
