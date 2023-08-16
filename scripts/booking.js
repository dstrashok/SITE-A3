/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? Yes
// When do they need to be reset or updated? Any time the page loads

document.addEventListener("DOMContentLoaded", function () {
    const costPerFullDay = 65; 
    const costPerHalfDay = 40; 
    let selectedDays = []; 

    const daySelectors = document.querySelectorAll(".day-selector li");
    const fullButton = document.getElementById("full");
    const halfButton = document.getElementById("half");
    const calculatedCost = document.getElementById("calculated-cost");
    const clearButton = document.getElementById("clear-button");

    daySelectors.forEach(day => {
        day.addEventListener("click", function () {
            day.classList.toggle("clicked");

            if (day.classList.contains("clicked")) {
                selectedDays.push(day.textContent);
            } else {
                selectedDays = selectedDays.filter(d => d !== day.textContent);
            }

            calculateCost();
        });
    });

    fullButton.addEventListener("click", function () {
        selectedDays.forEach(day => document.getElementById(day).classList.add("clicked"));
        calculateCost();
    });

    halfButton.addEventListener("click", function () {
        selectedDays.forEach(day => document.getElementById(day).classList.remove("clicked"));
        calculateCost();
    });

    clearButton.addEventListener("click", function () {
        daySelectors.forEach(day => day.classList.remove("clicked"));
        selectedDays = [];
        calculateCost();
    });

    function calculateCost() {
        const numFullDays = selectedDays.filter(day => day !== "Sat" && day !== "Sun").length;
        const numHalfDays = selectedDays.filter(day => day === "Sat" || day === "Sun").length;

        const totalCost = (numFullDays * costPerFullDay) + (numHalfDays * costPerHalfDay);
        calculatedCost.textContent = totalCost.toFixed(2);
    }
});


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.




// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


