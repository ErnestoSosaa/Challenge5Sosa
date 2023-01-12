
$(function () {
  let currentDay = document.getElementById('currentDay');
  currentDay.innerHTML = dayjs().format('MMMM D, YYYY');
  // Setting a date variable
  var date = new Date();
  // Getting current hour from current date
  var currentHour = date.getHours();

  // Looping through all the time block divs
  var containerDiv = document.getElementById("containerDiv");
  var hourDivs = containerDiv.getElementsByTagName("DIV");
  for(var i=0; i<hourDivs.length; i++)
  {
      // Saving the current ID for later use
      var currentId = hourDivs[i].id
      var saved_value = localStorage.getItem(currentId);
      console.log(saved_value)
      // Get the number from each id
      var hour_num = parseInt(currentId.replace('hour-', ''))
      var currentTextArea = "ta-" + hour_num
      // Loading the saved value for each block - only if it's not null
      if (saved_value != null) {
        document.getElementById(currentTextArea).value = saved_value
      }
      // Comparing the current hour vs the id for each block and using the style needed
      if (currentHour > hour_num) {
        document.getElementById(currentId).className = "row time-block past";
      }
      if (currentHour == hour_num) {
        document.getElementById(currentId).className = "row time-block present";
      }
      if (currentHour < hour_num) {
        document.getElementById(currentId).className = "row time-block future";
      }
  }


  let save = $('.btn');
  // localStorage.getItem(time);

  save.on('click', function(){
    console.log('hi 2');
    const time = $(this).parent().attr('id');
    console.log(time);
    const input = $(this).siblings('textarea').val();
    console.log(input);
    localStorage.setItem(time, input);

  })
  
  });