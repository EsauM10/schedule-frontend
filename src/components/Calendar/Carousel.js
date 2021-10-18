import "./Calendar.css";
import React, { useRef, useContext } from "react";
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
import { CalendarContext } from "../../contexts/CalendarProvider";
import Item from "./Item";


export default function Carousel(){
    const {days}   = useContext(CalendarContext)
    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
        <div className="carousel">
            <IoIosArrowDropleftCircle className="carousel-button" onClick={handleLeftClick}/>

            <div className="scroll" ref={carousel}>
                {days && days.map((item) => (
                    <Item key={item.date} dateItem={item} />
                ))}
            </div>

            <IoIosArrowDroprightCircle className="carousel-button" onClick={handleRightClick}/>
        </div>
    );
}