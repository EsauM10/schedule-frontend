import React, {createContext, useState} from "react";
import {getDaysInMonth, getSelectedDate} from "../services/dates";

const date = new Date();
const calendarDays = getDaysInMonth(date.getMonth(), date.getFullYear());
const todayItem    = getSelectedDate(calendarDays); 

export const CalendarContext = createContext();

export default function CalendarProvider({children}){
    const[days, setDays] = useState(calendarDays);
    const[selectedItem, setSelectedItem] = useState(todayItem);
    
    const setSelectedDateItem = (date) => {
        const newDays = days.map((item) => {
            if(item.date === date){
                item.selected = true;
                setSelectedItem(item);
            }
            else {
                item.selected = false;
            }
            return item;
        });
        setDays(newDays);
    }


    return (
        <CalendarContext.Provider
            value={{days, selectedItem, setSelectedDateItem}}
        >
            {children}
        </CalendarContext.Provider>
    );
}