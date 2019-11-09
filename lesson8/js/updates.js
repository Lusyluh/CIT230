var now = new Date();

function newDay(args){
    
    if(args == 0){
        return "Sunday";
    }
    else if(args == 1){
        return "Monday";
    }
    else if(args == 2){
        return "Tuesday";
    }
    else if(args == 3){
        return "Wednesday";
    }
    else if(args == 4){
        return "Thursday";
    }
    else if(args == 5){
        return "Friday";
    }
    else {
        return "Saturday";
    }
}

function newMonth(args){
    
    if(args == 0){
        return "January";
    }
    else if(args == 1){
        return "February";
    }
    else if(args == 2){
        return "March";
    }
    else if(args == 3){
        return "April";
    }
    else if(args == 4){
        return "May";
    }
    else if(args == 5){
        return "June";
    }
    else if(args == 6){
        return "July";
    }
    else if(args == 7){
        return "August";
    }
    else if(args == 8){
        return "September";
    }
    else if(args == 9){
        return "October";
    }
    else if(args == 10){
        return "November";
    }
    else {
        return "December";
    }

}
document.getElementById("day").textContent =newDay(now.getDay())+', '+now.getDate()+' '+ newMonth(now.getMonth())+' '+ now.getFullYear();



