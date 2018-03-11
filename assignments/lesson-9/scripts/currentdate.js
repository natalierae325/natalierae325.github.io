var dayName = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");

var monthName = new Array("January","February","March","April","May","June","July","August","September","October","November",
"December");
var d=new Date();
var today = dayName[d.getDay()] + ", " + d.getDate() + " " + monthName[d.getMonth()] + " " + d.getFullYear();
document.getElementById("currentdate").innerHTML = today;
 