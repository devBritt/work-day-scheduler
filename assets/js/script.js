// variables
// schedule element selector
var scheduleEl = $("#schedule");
// current time object
var currentTime = moment();
// schedule item descriptions
var itemDescriptions = [
    "", "", "", "", "", "", "", "", "", "", "", "", ""
];

// functions
// function to update textarea color based on current time
function timeColorChange() {

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
    itemDescriptions = JSON.parse(localStorage.getItem("schedule"));

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