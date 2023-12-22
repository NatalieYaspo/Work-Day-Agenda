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
var descriptionInputEl = $('.description');

//Sets the basis for today's date.
var today = dayjs();

//Sets the current Day and Time to display in header.
$( function() {
  $('#currentDay').text(today.format('dddd MMMM D, YYYY HH:mm a')); 
});
// console.log(today.format('HH'));



  // TODO: This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function?  How might the id be
  // useful when saving the description in local storage?
$( function() {

});

//Read user input for item description:
var newDescription = descriptionInputEl.val().trim();

 
  function saveDescriptionToStorage(newDescription) {
localStorage.setItem('newDescription', JSON.stringify(newDescription));//Is not saving my description
  };

//When save button is clicked, the new event is logged in to local storage.
saveBtn.on('click', function(event) {
  event.preventDefault();
  // console.log('clicked');
  //Finds which timeslot the save button was pushed on.
  var saveTmBtn = $(this).parent().attr('id');
  // console.log(saveTmBtn);
  //Saves which timeslot the Save button was pushed on.
  localStorage.setItem('saveTmBtn', JSON.stringify(saveTmBtn));
  saveDescriptionToStorage();
});


// showTasks();


//Past, Preset, or Future classes are added according to the current time.
var blockHour = "";

$('.time-block').each(function() {
  //Getting the ID for each time block.
    var hourXX = $(this).attr('id');
    // console.log(hourXX);
    //Splitting the name of the block hour-xx by the - and taking only what is after the -.
    blockHour = hourXX.split("-")[1];
    // console.log(blockHour);
    //Creating a link back to the ID to change the classes later on.
    var blockLink = $('#' + hourXX);
    // console.log(blockLink);
    //If this hour has past, it changes to the Past color.
    if (blockHour < today.format('HH')) {
      // console.log(today.format('HH'));
      blockLink.addClass('past');
      blockLink.removeClass('present');
      blockLink.removeClass('future');
      //If this hour is current, it changes to the current color.
    } else if (blockHour === today.format('HH')) {
      blockLink.removeClass('past');
      blockLink.addClass('present');
      blockLink.removeClass('future');
      //If this hour has not yet happened, it is the future color.
    } else if (blockHour > today.format('HH')) {
      blockLink.removeClass('past');
      blockLink.removeClass('present');
      blockLink.addClass('future');
    }
});

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
// $( showTasks () {
//   var savedTasks = JSON.parse(localStorage.getItem('newDescription', ));
//     $('.time-block').each(function() {
//       $(this).attr('id').text(savedTasks);
//     }
//     )


  
// });
