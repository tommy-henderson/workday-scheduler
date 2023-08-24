// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page
  $('#saved').addClass('hide')

function showMessage() {
  $('#saved').removeClass('hide')
}

function hideMessage () {
  $('#saved').addClass('hide')
}
  $('#saved').addClass('hide')

  $('.saveBtn').on('click', saveClass)
 
  function saveClass () {
    var task = $(this).siblings('.task').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, task)
    showMessage ()
    setTimeout(hideMessage, 1000)
  }

$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY, h'));

setInterval(timeUpdater, 50000)

$('#hour9 .task').val(localStorage.getItem('hour9'));
$('#hour10 .task').val(localStorage.getItem('hour10'));
$('#hour11 .task').val(localStorage.getItem('hour11'));
$('#hour12 .task').val(localStorage.getItem('hour12'));
$('#hour13 .task').val(localStorage.getItem('hour13'));
$('#hour14 .task').val(localStorage.getItem('hour14'));
$('#hour15 .task').val(localStorage.getItem('hour15'));
$('#hour16 .task').val(localStorage.getItem('hour16'));
$('#hour17 .task').val(localStorage.getItem('hour17'));

})