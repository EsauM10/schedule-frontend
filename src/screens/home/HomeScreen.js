import "./Home.css";
import React from "react";
import TaskProvider from '../../contexts/TaskProvider';
import Calendar from '../../components/Calendar/Calendar';
import TaskList from "../../components/TaskList/TaskList";
import CalendarProvider from "../../contexts/CalendarProvider";
import Header from "../../components/Header/Header";

export default function HomeScreen(){
    
    return (
        <CalendarProvider>
            <TaskProvider>
                <div className="container">
                    <Header />
                    <Calendar />  
                    <TaskList />
                </div>
            </TaskProvider> 
        </CalendarProvider> 
    );
}