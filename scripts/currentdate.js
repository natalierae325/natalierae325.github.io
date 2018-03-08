    var currentDate = new Date();
    var day = currentDate.getDate();
switch (new Date().getDay()) {
    case 0:
        day = "Sunday, " + day;
        break;
    case 1:
        day = "Monday, " + day;
        break;
    case 2:
        day = "Tuesday, " + day;
        break;
    case 3:
        day = "Wednesday, " + day;
        break;
    case 4:
        day = "Thursday, " + day;
        break;
    case 5:
        day = "Friday, " + day;
        break;
    case 6:
        day = "Saturday, " + day;
}
var month = currentDate.getMonth() + 1;
   
   var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  
        
    var year = currentDate.getFullYear();
    var date = document.getElementById("currentdate");

    var stringdate = day + " " + monthNames[month] + " " + year;
    console.log(stringdate);
    date.innerHTML= day + " " + monthNames[month] + " " + year; 

  
 