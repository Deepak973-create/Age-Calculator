function age(){
    var ur_date = document.getElementById("date").value;
    var ur_month = document.getElementById("month").value;
    var ur_year = document.getElementById("year").value;
    var date = new Date();
    var curr_date = date.getDate();
    var curr_month = 1 + date.getMonth();
    var curr_year = date.getFullYear();
    var month = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(ur_date>curr_date){
        curr_date +=month[curr_month-1];
        curr_month-=1;
    }
    if(ur_month>curr_month){
        curr_month+=12;
        curr_year-=1;
    }
    var y = curr_year - ur_year;
    var m = curr_month - ur_month;
    var d = curr_date - ur_date;
    document.getElementById("demo").innerHTML = "Your age is "+y+" years, "+m+" months , "+d+" days.";
}
function reset(){
    document.getElementById("date").value = null;
    document.getElementById("month").value = null;
    document.getElementById("year").value = null;
    document.getElementById("demo").innerHTML = "";
}