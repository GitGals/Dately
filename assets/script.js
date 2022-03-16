// set global variables to empty strings
var date = "";



// event listeners
document.addEventListener("DOMContentLoaded", function () {
    // initialize all Materialize elements
    M.AutoInit();
    let today = new Date().toISOString().slice(0, 10)
    document.getElementById("datepicker").setAttribute('min', today);

    // when user picks a date in calendar, it stores date to 'userDate' variable in format yyyy-mm-dd
    $("#datepicker").datepicker({
        onSelect: function (input) {
            date = input.toISOString().substring(0, 10);
            console.log("The value of userDate is: " + date);
            document.querySelector("input").value = date;
        },
    });
});

// parses form for user input then saves in localdata for search_results page
function saveParameters() {
    let input = document.getElementById("location").value;

    if (input && date) {
        console.log("setting search parameters");
        let param = {
            date: date,
            location: input,
        };
        localStorage.setItem("yelpParam", JSON.stringify(param));
        window.location.href = "./search.html";
    } else {
        // tell user to input something to make another search
    }
}

// event listener - submits form and sends user to search_results
document.getElementById("submit-btn").addEventListener("click", function (event) {
    event.preventDefault();
    saveParameters();
});
