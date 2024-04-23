import { AiFillEdit, AiFillDelete } from "react-icons/ai";
export const MyTodos = ({text, deleteTodo, updatingInInput}) => {
    return(
        <div>
            <p>{text}</p>
            <AiFillEdit onClick={updatingInInput}/>
            <AiFillDelete onClick={deleteTodo}/>
        </div>
    )
}