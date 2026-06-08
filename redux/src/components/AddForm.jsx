import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"

export default function TodoForm(){
    const [task,setTask]=useState({})
    const dispatch=useDispatch();

    let submitHandler=(evt)=>{
        evt.preventDefault()
        dispatch(addTodo(task))
    }
    return(
        <>
            <form onSubmit={submitHandler}>
                <input placeholder="Enter Task" type="text" name="" id="" onChange={(e)=>setTask(e.target.value)} />
                <button>Add Task</button>
            </form>
        </>
    )
}