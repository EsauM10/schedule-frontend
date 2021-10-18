import React, {useContext, useState} from "react";
import "./Form.css";
import {TaskContext} from "../../contexts/TaskProvider";
import { CalendarContext } from "../../contexts/CalendarProvider";


export default function Form(){
    const {selectedItem} = useContext(CalendarContext);
    const {addTask} = useContext(TaskContext);
    const [text, setText] = useState("");

    const handleChange = e => setText(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        
        addTask({
                "title": text,
                "done": false,
                "created_at": selectedItem.full_date,
        });
        setText("");
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input
                className="form-input"
                type="text"
                placeholder="Nova Tarefa"
                value={text}
                name="text"
                onChange={handleChange}
            />
            
            <button className="form-button" type="submit">Criar</button>
        </form>
        
    );
}