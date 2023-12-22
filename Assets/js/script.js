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


//When save button is clicked, the new event is logged in to local storage.
saveBtn.on('click', function(event) {
  event.preventDefault();
  // console.log('clicked');

  //Finds which timeslot the save button was pushed on.
  var saveTmBtn = $(this).parent().attr('id');

  //Read user input for item description:
  var newDescription = $('#' + saveTmBtn).find('textarea').val();
  // console.log($('#' + saveTmBtn).find('textarea').val());
  // console.log(saveTmBtn);

  //Saves which timeslot the Save button was pushed on.
  localStorage.setItem(saveTmBtn, newDescription);
});



//Past, Preset, or Future classes are added according to the current time.
var blockHour = "";

//This will run through each Time Block to set any agenda items that have been saved and update the colors of the blocks based on current time.
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

    //Getting any stored agenda items out of local storage for each time block.
    var storedAgendas = localStorage.getItem(hourXX);
    // console.log(storedAgendas);

    //Updating the textarea for each time block with the appropriate stored agenda items.
    $(this).find('textarea').val(storedAgendas);

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
