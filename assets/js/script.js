$(document).ready(function () {
    //Define function to set key value pairs for local storage
    function saveEvent() {
        //Assign key value pairs based on elements from each time-block
        $('.time-block').each(function () {
            var time = $(this).attr("id");
            var activity = $(this).children("textarea").val();
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

    //Values saved in local storage shown even when page refreshed
    $('#time9 textarea').val(localStorage.getItem('time9'));
    $('#time10 textarea').val(localStorage.getItem('time10'));
    $('#time11 textarea').val(localStorage.getItem('time11'));
    $('#time12 textarea').val(localStorage.getItem('time12'));
    $('#time13 textarea').val(localStorage.getItem('time13'));
    $('#time14 textarea').val(localStorage.getItem('time14'));
    $('#time15 textarea').val(localStorage.getItem('time15'));
    $('#time16 textarea').val(localStorage.getItem('time16'));
    $('#time17 textarea').val(localStorage.getItem('time17'));
})