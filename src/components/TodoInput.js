import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {  addTodo } from "../redux/action";
import "./TodoInput.css";


const TodoInput = ({ createTodo }) => {
    const [task, setTask] = useState(""); 
    const dispatch = useDispatch(); 
    const handleChange = (e) => {
        console.log(1, task);
        setTask(e.target.value)
        console.log(2, task);
        // console.log(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(3,task);
        dispatch(addTodo(task))
        setTask("");
    };
    return (
        <form className="TodoInput" onSubmit={handleSubmit}>
            <input 
              type="text"
              placeholder="Input task name then tap Enter to add"
              id="task"
              name="task"
              value={task}
              onChange={handleChange}
            />
        </form>
    );
};

export default TodoInput; 