
var weekDayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var workingHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];

renderHeader();



// Returns the week day for a given index; 0 = Sunday and 6 = Saturday
function getWeekDay(index) {
    return weekDayArr[index];
}

// Returns the month for a given index; 0 = January and 11 = December
function getMonth(index) {
    return monthArr[index];
}

// Renderrs the Jumbotron header
function renderHeader() {

    var today = new Date();
    var day = moment(today).date();

    var month = getMonth(moment(today).month());
    //var year = moment(today).year();
    var weekDay = getWeekDay(moment(today).weekday());

    var currentDayVal = weekDay + ", " + month + " " + day;
    $("#currentDay").text(currentDayVal);

    /*alert("day: " + day);
    alert("month: " + month);
    alert("year: " + year);
    alert("weekday: " + weekDay);*/

}

function renderScheduler() {
    for (var i = 0; i < workingHours.length; i++) {

    }
}