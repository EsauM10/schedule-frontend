import React, { useContext, useState } from "react";
import { TaskContext } from "../../contexts/TaskProvider";
import { IoMdClose } from "react-icons/io";
import "./TaskEditor.css";

export default function TaskEditor(){
    const {taskSelected, setTaskSelected, removeTask, editTask} = useContext(TaskContext);
    const [text, setText] = useState(taskSelected.title);
    
    const handleChange = e => setText(e.target.value);

    const onCancel = () => {
        setTaskSelected(null);
    }
    const onDelete = () => {
        const task = taskSelected;
        setTaskSelected(null);
        removeTask(task);
    }
    const onSave = () => {
        taskSelected.title = text;
        editTask(taskSelected);
        setTaskSelected(null);
    }

    return (
        <div className="editor-container">
            <div className="editor-header">
                <IoMdClose 
                    className="pointer"
                    size={40} 
                    onClick={onCancel} 
                    color="#4044C9"
                />
            </div>

            <div className="editor-body">
                <input
                    className="editor-input"
                    type="text"
                    placeholder="Nova Tarefa"
                    value={text}
                    name="text"
                    onChange={handleChange}
                />

                <div className="button-group">
                    <button className="button-delete" onClick={onDelete}>Excluir</button>
                    <button className="button-save" onClick={onSave}>Salvar</button>
                </div>
            </div>
        </div>
    );
}