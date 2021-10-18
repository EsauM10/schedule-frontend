import axios from 'axios';


export const api = axios.create({
    baseURL: "https://taskscheduler-app.herokuapp.com/api/",
});


export function getErrors(responseData){
    const errors = [];
    Object.entries(responseData).forEach(item => {
        item[1].forEach(message => errors.push(message));
    });
    return errors;
}