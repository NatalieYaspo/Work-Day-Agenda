//HTML Hooks
var currentDayEl = $('#currentDay');
var hour09 = $('#hour-09');
var hour10 = $('#hour-10');
var hour11 = $('#hour-11');
var hour12 = $('#hour-12');
var hour13 = $('#hour-13');
var hour14 = $('#hour-14');
var hour15 = $('#hour-15');
var hour16 = $('#hour-16');
var hour17 = $('#hour-17');
var saveBtn = $('.saveBtn');

//Other Variables
var today = dayjs();



//Sets the current Day and Time to display in header.
$( function() {
  $('#currentDay').text(today.format('dddd MMMM D, YYYY HH:mm a')); 
});
// console.log(today.format('HH'));

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
$( function() {

});

// $(function saveDescription(newDescription) {
//   localStorage.setItem('newDescription', JSON.stringify(newDescription));
// });

saveBtn.on('click', function(event) {
  event.preventDefault();
  var newDescription = $('.description').val();
  localStorage.setItem('newDescription', JSON.stringify(newDescription));
});

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
//Needs to add proper class to times for past, present and future.  Need to find a way to for loop this.
// $('.time-block').each(function() {
//     var hourXX = $(this).attr('id');
//     var blockHour = parseInt(hourXX).split("-");
//     console.log(blockHour);
// });


//   for (var i = 0; i < blockHour +1; i++) {
//     if (blockHour < today.format('HH')) {
//       blockHour.addclass('past');
//     } else if (blockHour === today.format('HH')) {
//       blockHour.addclass('present');
//     } else if (blockHour > today.format('HH')) {
//       blockHour.addclass('future');
//     }
//   }
// });

$(function () {

  //

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
});
