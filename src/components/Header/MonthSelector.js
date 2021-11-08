import "./Header.css";
import React, {useContext} from "react";
import { CalendarContext } from "../../contexts/CalendarProvider";
import { months } from "../../services/dates";


export default function MonthSelector(){
    const {selectedMonth, setSelectedMonth} = useContext(CalendarContext);

    const handleOnChange = (e) => {
        setSelectedMonth(parseInt(e.target.value, 10));
    }

    return (
        <div className="selector">
            <select defaultValue={selectedMonth} onChange={handleOnChange}>
                {
                    months.map((item, index) => <option key={index} value={index}>{item}</option>)
                }
            </select> 
        </div>       
    );
}
