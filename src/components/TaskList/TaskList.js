import "./TaskList.css";
import React, {useContext} from "react";
import {TaskContext} from "../../contexts/TaskProvider";

import Task from "../Task/Task";
import Form from "../Form/Form";
import TaskEditor from "../TaskEditor/TaskEditor";


function List(){
    const {tasks} = useContext(TaskContext);
    
    return (
        <div className="list-container">
            <Form />
            <ul>
                {tasks && tasks.map((task, index) => {
                    return <Task task={task} key={index}/>
                })}
            </ul>
        </div>
    );
}

export default function TaskList(){
    const {taskSelected} = useContext(TaskContext);   
    const hideTasks = (taskSelected===null) ? false : true;

    return (
        <div className="tasklist">
            {
                !hideTasks ? <List /> : <TaskEditor />
            }
        </div>       
    );
}