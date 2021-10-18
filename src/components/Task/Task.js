import React, { useContext } from "react";
import "./Task.css";
import { TaskContext } from "../../contexts/TaskProvider";
import { MdEdit } from "react-icons/md";



export default function Task({task}){
    const {setTaskSelected, editTask} = useContext(TaskContext);

    const onEdit = () => {
        setTaskSelected(task);
    }
    
    const toggleStatus = () => {
        task.done = !task.done;
        editTask(task);
    }

    const getTitle = () => {
        return (task.done) ? "decoration" : "";
    }

    return (
        <li className="task-container">
            <div className="task-content">
                <span className={getTitle()}>{task.title}</span>
                <div className="task-status" onClick={toggleStatus}>
                    {task.done ? "completa":"incompleta"}
                </div>
            </div>
            
            <div>
                <MdEdit
                    className="pointer" 
                    size={20} 
                    onClick={onEdit} 
                    color="#41414B"
                />
            </div>
        </li>
    );
}