import "./Calendar.css";
import React, { useContext } from "react";
import { CalendarContext } from "../../contexts/CalendarProvider";


export default function Item({dateItem}){
    const {setSelectedDateItem} = useContext(CalendarContext);
    
    const getStyle = () => {
        return (dateItem.selected) ? "item-container selected" : "item-container unselected";
    }

    const handleOnClick = () => {
        setSelectedDateItem(dateItem.date);
    }

    return (
        <div className={getStyle()} onClick={handleOnClick}>
            <h2>{dateItem.day}</h2>
            <h2>{dateItem.date}</h2>
        </div>
    );
}