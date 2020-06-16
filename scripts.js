$(document).ready(function () {
  // var currentDate = $("#currentDay")
  var allTimeSlots = $(".timeSlot");
  // console.log(allTimeSlots);
  var currentDate = moment().format("MMM Do YY");
  // console.log(currentDate);

  $("#currentDay").text(currentDate);
  var currentHour = moment().format("H");
  // console.log(currentHour);

  allTimeSlots.each(function () {
    var loopTime = $(this).data("time");
    // console.log($(this).data("time"));
    if (loopTime < currentHour) {
      $(this).addClass("past");
    } else if (loopTime > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });
  // Local Storage
  // saving info from the input .textarea
  //   //listening for button click on the save button .saveBtn
  var textEl = $("#input15").val();

  var rows = $(".row").each(function (index, value) {
    $(".saveBtn").on("click", function () {
      var textInput = $(".textarea").val();
      console.log(textInput);
    });
  });

  // console.log(rows);

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
// make it so that the save buttons save the user input into local storage
