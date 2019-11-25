function display_banner() {
    if (newDay(now.getDay()) == "Friday") {
        let banner_dis = document.getElementById("fridaybanner");
        banner_dis.style.display = "block";
    }
    display_msg();
}
