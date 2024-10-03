import { useState , useRef } from "react"

const App = () => {
  const [todo , setTodo] = useState([]);
  const todoVal = useRef()

  const addTodo = (event)=>{
    event.preventDefault();
    todo.push(todoVal.current.value)
    setTodo([...todo]);
    console.log(todo);

    todoVal.current.value = ""
    
  }

  const deleteIt = (index)=>{
    console.log("todo deleted" , index);
    todo.splice(index , 1);
    setTodo([...todo]);
    
  }
  const editIt = (index)=>{
    console.log("todo edited" , index);
    const editedVal = prompt("enter value");
    todo.splice(index , 1 , editedVal);
    setTodo([...todo]);
    
  }
  return (
    <>
    <h1>Todo List</h1>
    <form onSubmit={addTodo}>
      <input type="text" placeholder="Enter list" ref={todoVal} />
      <button type="submit">Add</button>
    </form>
    <ol>

      {todo.map((item , index)=>{
        return <div key={index}>
          <li >{item}</li>
          <button onClick={()=> editIt(index) }>edit</button>
          <button onClick={()=> deleteIt(index)}>delete</button>
        </div>
      })}
    </ol>
    
    </>
  )

  
}

export default App