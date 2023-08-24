$(document).ready(function () {

  // Hides "class saved" confirmation message automatically after loading page
  $('#saved').addClass('hide')

  // Function to show "class saved" message
  function showMessage() {
    $('#saved').removeClass('hide')
  }

  // Function to hide "class saved" message
  function hideMessage() {
    $('#saved').addClass('hide')
  }

  // Event Listener where clicking the save button will run saveClass function
  $('.saveBtn').on('click', saveClass)

  // function that uses form input as task variable and sets time variable and then commits to local memory. 
  function saveClass() {
    var task = $(this).siblings('.task').val();
    var time = $(this).parent().attr('id');

//Also displays "Saved to planner" message which disappears after 2.5 seconds
    localStorage.setItem(time, task)
    showMessage()
    setTimeout(hideMessage, 2500)
  }

  // sets hour variable so function can use as a reference to determine whether task is in past present or future
var hour = dayjs().hour();

// function that sets class of time block to "past", "present", or "future" based on real time
function blockUpdater() {

  // runs function for each element with class "timeblock"
  $('.timeblock').each(function() {

    // changes HTML element ID from string to integer so it can be compared to real hour
    var blockHour = parseInt($(this).attr('id'));

    // Sets class by comparing HTML ID to real hour
    if (blockHour === hour) {
      $(this).removeClass('past')
      $(this).removeClass('future')
      $(this).addClass('present')
    } else if (blockHour > hour) {
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')
    } else if (blockHour < hour) {
      $(this).removeClass('present')
      $(this).removeClass('future')
      $(this).addClass('past')
    }
  })
}

// runs blockUpdater function and re-runs every minute
blockUpdater()
setInterval(blockUpdater, 60000)

// Pulls time and sets it to 'currentday' element at the top of the page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY, h:mm'));

  $('#9 .task').val(localStorage.getItem('9'));
  $('#10 .task').val(localStorage.getItem('10'));
  $('#11 .task').val(localStorage.getItem('11'));
  $('#12 .task').val(localStorage.getItem('12'));
  $('#13 .task').val(localStorage.getItem('13'));
  $('#14 .task').val(localStorage.getItem('14'));
  $('#15 .task').val(localStorage.getItem('15'));
  $('#16 .task').val(localStorage.getItem('16'));
  $('#17 .task').val(localStorage.getItem('17'));

})