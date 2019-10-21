
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

function display_banner(){
    if(now.newDay() == "Monday"){
        let banner_dis = document.getElementById("fridayBanner")
        banner_dis.style.display = "block"}

    display_msg();
    }
function display_msg(){
    let msg = Saturday = "Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    document.getElementById("fridaybanner").innerHTML = msg;
}

