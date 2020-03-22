
var weekDayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var workingHours12Hrs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var workingHours24Hrs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

// The below 2 parameters can be altered to change the work scheduler's start and end times
var scheduleStartTime = 0;
var scheduleEndTime = 23;

renderHeader();
renderScheduler();


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
    //alert("today: " + today);
    var day = moment(today).date();

    var month = getMonth(moment(today).month());
    //var year = moment(today).year();
    var weekDay = getWeekDay(moment(today).weekday());

    var currentDayVal = weekDay + ", " + month + " " + day;
    $("#currentDay").text(currentDayVal);
}

function renderScheduler() {
    
    // For 12 hour clock, the current hour is found as below
    //var currentHour = moment(today).hour() % 12;
    var today = new Date();
    var currentHour = moment(today).hour();

    for (var i = scheduleStartTime; i < scheduleEndTime; i++) {
        var workHourDisplay = workingHours12Hrs[i];
        var workHourCalc = i;
        
        var section = $("section");
        var formTag = $("<form>");
        section.append(formTag);
        
        var divFormGrp = $("<div>");
        divFormGrp.addClass("form-group div-schd-form-grp");
        formTag.append(divFormGrp);
        
        var divRow = $("<div>");
        divRow.addClass("row");
        divFormGrp.append(divRow);
        
        var divColHour = $("<div>");
        divColHour.addClass("col-md-2 div-schd-col");
        divRow.append(divColHour);
        
        var hrHourColmn = $("<hr>");
        hrHourColmn.attr("size", "15");
        hrHourColmn.addClass("hr-table");
        divColHour.append(hrHourColmn);

        var labelHour = $("<label>");
        labelHour.addClass("float-right");
        var h3Hour = $("<h3>");
        var amPm = "AM";
        if(workHourCalc > 12) {
            amPm = "PM";
        }
        var timeSlot = workingHours12Hrs[i] + " - " + amPm; 
        h3Hour.text(timeSlot);
        divColHour.append(h3Hour);

        var divColEvent = $("<div>");
        divColEvent.addClass("col-md-9 div-schd-col");

        var hrEventColmn = $("<hr>");
        hrEventColmn.attr("size", "15");
        hrEventColmn.addClass("hr-table");
        divColEvent.append(hrEventColmn);

        var textArea = $("<textarea>");
        var textAreaClasses = "form-control ta-border";
        var taBgrnd = "";
        if(workHourCalc == currentHour) {
             // paint textarea red
            taBgrnd = "ta-padng-prsnt";
        } else if(workHourCalc < currentHour) {
            // paint textarea gray
            taBgrnd = "ta-padng-past";
        } else {
            //paint textarea green
            taBgrnd = "ta-padng-fut";
        }
        textAreaClasses = textAreaClasses + " " + taBgrnd;
        textArea.addClass(textAreaClasses);
        textArea.attr("rows", "2");
        textArea.attr("time-slot", i);
        divColEvent.append(textArea);

        divRow.append(divColEvent);

        var divColBtnSave = $("<div>");
        divColBtnSave.addClass("col-md-1 div-schd-col");

        divRow.append(divColBtnSave);

        var btnSave = $("<button>");
        btnSave.addClass("btn btn-primary btn-save");
        btnSave.text("save");

        divColBtnSave.append(btnSave);

    }
}