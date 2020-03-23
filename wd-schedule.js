
var section = $("section");
var weekDayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var workSchedule = [
    {
        workingHour12: "1 AM",
        workingHour24: 1,
        event: ""
    },
    {
        workingHour12: "2 AM",
        workingHour24: 2,
        event: ""
    },
    {
        workingHour12: "3 AM",
        workingHour24: 3,
        event: ""
    },
    {
        workingHour12: "4 AM",
        workingHour24: 4,
        event: ""
    },
    {
        workingHour12: "5 AM",
        workingHour24: 5,
        event: ""
    },
    {
        workingHour12: "6 AM",
        workingHour24: 6,
        event: ""
    },
    {
        workingHour12: "7 AM",
        workingHour24: 7,
        event: ""
    },
    {
        workingHour12: "8 AM",
        workingHour24: 8,
        event: ""
    },
    {
        workingHour12: "9 AM",
        workingHour24: 9,
        event: ""
    },
    {
        workingHour12: "10 AM",
        workingHour24: 10,
        event: ""
    },
    {
        workingHour12: "11 AM",
        workingHour24: 11,
        event: ""
    },
    {
        workingHour12: "12 Noon",
        workingHour24: 12,
        event: ""
    },
    {
        workingHour12: "1 PM",
        workingHour24: 13,
        event: ""
    },
    {
        workingHour12: "2 PM",
        workingHour24: 14,
        event: ""
    },
    {
        workingHour12: "3 PM",
        workingHour24: 15,
        event: ""
    },
    {
        workingHour12: "4 PM",
        workingHour24: 16,
        event: ""
    },
    {
        workingHour12: "5 PM",
        workingHour24: 17,
        event: ""
    },
    {
        workingHour12: "6 PM",
        workingHour24: 18,
        event: ""
    },
    {
        workingHour12: "7 PM",
        workingHour24: 19,
        event: ""
    },
    {
        workingHour12: "8 PM",
        workingHour24: 20,
        event: ""
    },
    {
        workingHour12: "9 PM",
        workingHour24: 21,
        event: ""
    },
    {
        workingHour12: "10 PM",
        workingHour24: 22,
        event: ""
    },
    {
        workingHour12: "11 PM",
        workingHour24: 23,
        event: ""
    },
    {
        workingHour12: "12 MN",
        workingHour24: 24,
        event: ""
    },
]

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
    //alert("current time: " + currentHour);
    /*var workScheduleStored = false;*/
    if(localStorage.getItem("workSchedule") == true) {
        workSchedule = localStorage.getItem("workSchedule");
        //workScheduleStored = true;
    }

    for (var i = scheduleStartTime; i < scheduleEndTime; i++) {
        var workHourDisplay = workSchedule[i].workingHour12;
        var workHourCalc = workSchedule[i].workingHour24;
        var event = workSchedule[i].event;

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

        h3Hour.text(workHourDisplay);
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
        if (workHourCalc == currentHour) {
            // paint textarea red
            taBgrnd = "ta-padng-prsnt";
        } else if (workHourCalc < currentHour) {
            // paint textarea gray
            taBgrnd = "ta-padng-past";
        } else {
            //paint textarea green
            taBgrnd = "ta-padng-fut";
        }
        textAreaClasses = textAreaClasses + " " + taBgrnd;
        textArea.addClass(textAreaClasses);
        textArea.attr("rows", "2");
        textArea.attr("id", i);
        textArea.val(event);
        
        divColEvent.append(textArea);
        
        divRow.append(divColEvent);

        var divColBtnSave = $("<div>");
        divColBtnSave.addClass("col-md-1 div-schd-col");

        divRow.append(divColBtnSave);

        var btnSave = $("<button>");
        btnSave.addClass("btn btn-primary btn-save");
        btnSave.attr("time-slot", i);
        btnSave.text("save");

        divColBtnSave.append(btnSave);
    }
}

$(document).ready(function () {
    $(".btn-primary").on("click", function () {
        event.preventDefault();
        var btnIndex = $(this).attr("time-slot");
        //alert("btnIndex: " + btnIndex);
        var textAreaWithID = $("#" + btnIndex);
        var eventVal = textAreaWithID.val();
        workSchedule[btnIndex].event =  eventVal;
        localStorage.setItem("workSchedule", workSchedule);
    });
});
