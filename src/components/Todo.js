import React, { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import "./Todo.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";                     


const Todo = ({ toggleTodo, task, completed, id, removeTodo, updateTodo }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTask, setEditTask] = useState(task);
    const [checked, setChecked] = React.useState(true);


    const handleChange = (event) => {
        setChecked(event.target.checked);
      };

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTodo(id, editTask);
        setIsEditing(false);
    }; 

    return (
            <TransitionGroup className={completed ? "Todo completed" : "Todo"} >
                     <Checkbox
                        onClick={toggleTodo}
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }} 
                        />
                {isEditing ? (
                    <CSSTransition key="editing" timeout={500} classNames="form">
                         <form className="Todo-edit-form" onSubmit={handleUpdate}>
                            <input 
                                type="text"
                                name="task"
                                value={editTask}
                                onChange={(e) => setEditTask(e.target.value)}  
                            />
                            <button>Save</button>
                         </form>
                    </CSSTransition>
                ) : ( 
                    <CSSTransition key="normal" timeout={500} classNames="task-text">
                        <li className="Todo-task" onClick={toggleTodo}>
                            {task}
                        </li>
                    </CSSTransition>
                )}

               <div className="Todo-buttons">
                    <button onClick={() => setIsEditing(true)}>
                        <i style={{color:"black"}} className="fas fa-pen" />
                    </button>
                    <button style={{color:"red"}} onClick={removeTodo}>
                        <i className="fas fa-trash" />
                    </button>
               </div>
            </TransitionGroup>
    );
};

export default Todo;    