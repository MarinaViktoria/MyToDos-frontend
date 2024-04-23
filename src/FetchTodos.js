import axios from 'axios';

const getAllTodos = (setTodo) => {
    axios.get('https://my-todos-backend-16yg.onrender.com')
    .then(({data}) => {console.log(data)
    setTodo(data);
})
}
const addTodo = (title, setTitle, setTodo) => {
    axios.post('https://my-todos-backend-16yg.onrender.com/saveTodos', { title })
    .then((data) => {console.log(data)
    setTitle("")
    getAllTodos(setTodo)
})
}
const editTodo = (TodoId, title, setTitle, setTodo, setEditing) => {
    axios.put('https://my-todos-backend-16yg.onrender.com/editTodo', { _id: TodoId, title })
    .then((data) => {console.log(data)
    setTitle("")
    setEditing(false)
    getAllTodos(setTodo)
})
}
const deleteTodo = (_id, setTodo) => {
    axios.post('https://my-todos-backend-16yg.onrender.com/deleteTodo', { _id })
    .then((data) => {console.log(data)
    getAllTodos(setTodo)
})
}

export {getAllTodos, addTodo, editTodo, deleteTodo};