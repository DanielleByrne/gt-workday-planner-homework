$(document).ready(function () {
  // variables
  var timeRows = $("<div>").addClass("row time-block");
  var timesCol = $("<div>").addClass("col-1 hour");
  var userNotesCol = $("<input>").addClass("col-10 textarea");
  var saveButtonCol = $("<div>").addClass("col-1");
  var saveBtn = $("<button>").addClass("saveBtn fas fa-lock");
//   var workdayHours = hours[hoursArrayIndex];


  var hours = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
  ];
//   var hoursArrayIndex = 0;


  // functon not appending properly
  function layout() {
    for (var i = 0; i < hours.length; i++) {
             $(".container").append(timeRows);
             $(timeRows).append(timesCol);
             $(timesCol).text(hours[i]);
             $(timeRows).append(userNotesCol);
             $(timeRows).append(saveButtonCol);
             $(saveButtonCol).append(saveBtn);
             
             
             
    }
  }
  layout();
  

  //function definitions

  //function calls

  // event listeners
});

//  PSEUDOCODE

// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```
//Things I need to add :
// rows and columns for the times 9:00am to 5:00 pm
// add the current day and time to the top of the page
// color-code the timeblocks  for the hours of the day
// create save buttons
// make it so that the save buttons save the user input into local storage
