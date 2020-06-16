$(document).ready(function () {

// var currentDate = $("#currentDay")
var allTimeSlots = $(".timeSlot");
// console.log(allTimeSlots);
var currentDate = moment().format("MMM Do YY");
// console.log(currentDate);

$("#currentDay").text(currentDate);
var currentHour= moment().format("H");
// console.log(currentHour);

allTimeSlots.each(function(){
  var loopTime=($(this).data("time"));
    // console.log($(this).data("time"));
    if(loopTime < currentHour){
      $(this).addClass("past")
    }
    else if(loopTime > currentHour){
      $(this).addClass("future")
    }
    else {
      $(this).addClass("present")

    }
})

// var textEl = $("#input15").val();


var rows = $(".row").each(function () {
  $(".saveBtn").on("click", function () {
    var textInput = $(".textarea").val();
    console.log(textInput)
  });
  // localStorage.setItem (".textarea",JSON.stringify(textInput));
  // var lastInput = JSON.parse(localStorage.getItem(".textarea"));
});



});

