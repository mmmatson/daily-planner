//Define function to set key value pairs for local storage
function saveEvent() {
    //Children elements of each time-block assigned as key value pairs
    $('.time-block').each(function () {
        var time = $(this).children(".hour").text();
        var activity = $(this).children(".description").val();
        localStorage.setItem(time, activity);
    })
}

//Display current day, date, and time using moment.js
$('#currentDay').text(moment().format('llll'));

//Color code timeblocks based on current time
function changeColor() {
    var currentTime = moment().hours();
    //Execute function for each element with time block class
    $(".time-block").each(function loopTimeBlocks() {
        //Remove "time" string from id associated with time-block class elements and convert into an integer
        var timeBlock = parseInt($(this).attr('id').replace("time", ''));
        //Add and/or remove classes from time-block based on current time
        if (timeBlock < currentTime) {
            $(this).removeClass('present');
            $(this).removeClass('future');
            $(this).addClass('past');
        }
        if (timeBlock === currentTime) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        }
        if (timeBlock > currentTime) {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })
}

//Call change color function
changeColor();

//Clicking save button saves events to local storage
$('.saveBtn').click(function () {
    saveEvent();
})