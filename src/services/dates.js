export const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", 
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

function parseDate(date){
    let num = date.toString();
    return (num.length < 2)? "0"+num : num; 
}

function isToday(date, month){
    const today = new Date();
    return (today.getDate() === date && today.getMonth() === month);
}

export function getDaysInMonth(month, year) {
    let weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    let date = new Date(year, month, 1);
    let days = [];

    while (date.getMonth() === month) {
        days.push({
            "date": parseDate(date.getDate()), 
            "day":  weekDays[date.getDay()], 
            "selected": isToday(date.getDate(), date.getMonth()),
            "full_date": `${year}-${parseDate(month+1)}-${parseDate(date.getDate())}`
        });
      	date.setDate(date.getDate() + 1);
    }
    return days;
}

export function getSelectedDate(calendarDays){
    const items = calendarDays.filter(item => (item.selected === true));
    return items[0];
}