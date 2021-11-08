import React, { createContext, useEffect, useState, useContext, useCallback } from 'react';
import {api} from "../services/api";
import { AuthContext } from './AuthProvider';
import { CalendarContext } from './CalendarProvider';

export const TaskContext = createContext();

export default function TaskProvider({children}){
    const {clearStorage} = useContext(AuthContext);
    const {selectedItem} = useContext(CalendarContext);
    const [tasks, setTasks] = useState([]);
    const [taskSelected, setTaskSelected] = useState(null);

    const addTask = (task) => {
        if(!task.title){
            return;
        }
        api.post('', task)
        .then(() => fetchTasks())
        .catch(err => console.log(err.response.data));
    }

    const removeTask = (task) => {
        api.delete(`${task.id}/`)
        .then(() => fetchTasks())
        .catch(err => console.log(err.response.data));
    }

    const editTask = (task) => {
        api.put(`${task.id}/`, task)
        .then(() => fetchTasks())
        .catch(err => console.log(err.response.data));
    }

    const fetchTasks = useCallback(() => {
        if(selectedItem === undefined) {
            setTasks([]);
            return;
        }
        const url = `?created_at=${selectedItem.full_date}`
        api.get(url).then(res => setTasks(res.data))
        .catch(err => {
            clearStorage();
            console.log(err.response)
        });
    }, [selectedItem, clearStorage]);
    

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    return (
        <TaskContext.Provider 
            value={{
                tasks,
                taskSelected,
                setTaskSelected,
                addTask,
                editTask,
                removeTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
}