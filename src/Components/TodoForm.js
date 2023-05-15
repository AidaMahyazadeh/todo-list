import {useState} from 'react';

function TodoForm({addTodo}){
    const [inputValue,setInputValue] = useState("");
    const handleChange =(event)=>{
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        addTodo(inputValue);
        setInputValue("");
    }

    return (
        <form  className="TodoForm" onSubmit={handleSubmit}>
          <input type="text"  value={inputValue}  onChange={handleChange} className="todo-input" placeholder='What is the task today?' />
          <button type="submit" className='todo-btn'>Add Task</button>
      </form>
      )
}

export default TodoForm;