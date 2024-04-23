import './App.css';
import { MyTodos } from './MyTodos';
import { useState, useEffect } from 'react'
import { getAllTodos, addTodo, editTodo, deleteTodo } from './FetchTodos';

function App() {
  const [myTodo, setTodo] = useState([])
  const [title, setTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAllTodos(setTodo)
  }, [])
  
  const updatingInInput = (_id, title) => {
    setEditing(true);
    setTitle(title);
    setTodoId(_id)
  }
  return (
    <div>
      <div className="container">
        <h1>ToDo List</h1>
        <input
        type="text"
        placeholder="Add an Item"
        spellcheck="false"
        value = {title}
        onChange = {(e) => setTitle(e.target.value)}/>

        <button disabled={!title}
          onClick=
          {editing ? () => editTodo(todoId, title, setTitle, setTodo, setEditing) : () => addTodo(title, setTitle, setTodo)}>
          {editing ? "Edit" : "Add"}</button>

        {myTodo.map((todo) => <MyTodos text={todo.title} key={todo._id}
        updatingInInput={() => updatingInInput(todo._id, todo.title)}
        deleteTodo={() => deleteTodo(todo._id, setTodo)}/>)}
        {/*<MyTodos text="we got here!!!"/>*/}

      </div>
    </div>
  );
}

export default App;
