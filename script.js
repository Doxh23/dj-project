function openMonth(monthName) {
    var i;
    var x = document.getElementsByClassName("schedule__month");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(monthName).style.display = "block";
}