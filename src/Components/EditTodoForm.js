import { useState } from "react";

function EditTodoForm({editTodo,task}){
    const [inputValue, setInputValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(inputValue, task.id);
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="todo-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Update Task</button>
  </form>
  )
}

export default EditTodoForm;