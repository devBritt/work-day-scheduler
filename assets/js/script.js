// variables
// schedule element selector
var scheduleEl = $("#schedule");
// schedule item descriptions
var itemDescriptions = [
    "", "", "", "", "", "", "", "", "", "", "", "", ""
];

// functions
// function to update textarea color based on current time
function dscBgColorChange() {
    // get the current time
    var currentTime = checkTime();

    // iterate through schedule el to check each row time agains current time
    $.each(scheduleEl.children(), function(i, item) {
        // get textarea element to change background
        var textareaEl = $(item).children(".description");
        // get row time
        var rowTime = new String($(item).children(".hour").text());
        
        // check for schedule past
        if (formatTime(rowTime) < currentTime) {
            // remove present, future bg colors
            $(textareaEl).removeClass("present", "future");
            // add past bg color
            $(textareaEl).addClass("past");
        }
        // check for schedule present
        else if (formatTime(rowTime) == currentTime) {
            // remove past, future bg colors
            $(textareaEl).removeClass("past", "future");
            // add present bg color
            $(textareaEl).addClass("present");
        }
        // check for schedule future
        else if (formatTime(rowTime) > currentTime) {
            // remove past, present bg colors
            $(textareaEl).removeClass("past", "present");
            // add future bg color
            $(textareaEl).addClass("future");
        };
    });
    
}

// function to format row time as 24hr, no suffix
function formatTime(time) {
    // check for AM/PM, make 24hr time
    if (time.endsWith("PM")) {
        // remove PM
        time = time.replace("PM", "").trim();
        
        // check for noon to skip 24hr format
        if (time.startsWith("12")) {
            // make int for time comparison
            time = parseInt(time);
        } else {
            // make int for time comparison, change to 24hr format
            time = parseInt(time) + 12;
        }
    } else if (time.endsWith("AM")) {
        // remove AM, make int for time comparison
        time = parseInt(time.replace("AM", "").trim());
    }

    // return formatted time
    return time;
}

// function to automatically run dscBgColorChange() every minute
function checkTime() {
    // get current date and time
    var currentDate = new Date();
    
    // return current hours
    return currentDate.getHours();
}


// function to save schedule
function saveSchedule(target) {
    // get id of updated row
    var rowId = $(target).attr("id");
    // get schedule item description
    var itemDescription = $(target).siblings(".description").val();

    // update itemDescriptions array with new description
    itemDescriptions.splice(rowId, 1, itemDescription);

    // save schedule to local storage
    localStorage.setItem("schedule", JSON.stringify(itemDescriptions));
}

// function to load schedule
function loadSchedule() {
    // get saved schedule
    if (JSON.parse(localStorage.getItem("schedule") !== null)) {
        itemDescriptions = JSON.parse(localStorage.getItem("schedule"));
    } else {
        return;
    }

    // loop over schedule element and set description vals
    $.each(scheduleEl.children(), function(index, item) {
        $(item).children(".description").val(itemDescriptions[index]);
    });
}

// event listeners
scheduleEl.on("click", ".saveBtn", function() {
    // clicked button
    var buttonClicked = $(this);
    saveSchedule(buttonClicked);
});

// on page load
loadSchedule();
dscBgColorChange();

// automatically check current time and update descriptions' backgrounds when app window is left open
setInterval(function() {
   dscBgColorChange(); 
}, 1000 * 60);