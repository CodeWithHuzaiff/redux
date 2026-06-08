import {useSelector} from 'react-redux'
import AddForm from './AddForm'
import { useDispatch } from "react-redux"
import { deleteTodo } from "../features/todo/todoSlice"

export default function Todo(){
    const todos=useSelector((state)=> state.todos);
    const dispatch=useDispatch();
    console.log(todos)

    let deletionHandler=(id)=>{
        dispatch(deleteTodo(id))
        console.log(id);
    }
    return(
        <>
            <AddForm/>
            <h3>Todos</h3>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.task}
                        <button onClick={()=>deletionHandler(todo.id)}>Delete</button>
                </li>))}
            </ul>
        </>
    )
}