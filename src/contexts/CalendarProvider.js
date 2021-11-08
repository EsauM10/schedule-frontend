import React, {createContext, useEffect, useState} from "react";
import {getDaysInMonth, getSelectedDate} from "../services/dates";

const date = new Date();

export const CalendarContext = createContext();

export default function CalendarProvider({children}){
    const [days, setDays] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
    const [selectedItem, setSelectedItem]   = useState(undefined);

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

    useEffect(() => {
        const calendarDays = getDaysInMonth(selectedMonth, date.getFullYear());
        const todayItem    = getSelectedDate(calendarDays);
        setDays(calendarDays);
        setSelectedItem(todayItem);
    }, [selectedMonth])

    return (
        <CalendarContext.Provider
            value={{days, selectedMonth, selectedItem, setSelectedMonth, setSelectedDateItem}}
        >
            {children}
        </CalendarContext.Provider>
    );
}