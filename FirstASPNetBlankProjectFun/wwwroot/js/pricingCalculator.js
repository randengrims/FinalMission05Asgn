$(document).ready(function () {
    $("#btnCalculate").click(function () {
        // Get the number of hours entered by the user
        let hours = parseFloat($("#hours").val());

        // Hourly rate (hardcoded)
        let hourlyRate = 20;

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid number of hours.");
            return;
        }

        // Calculate total cost
        let totalCost = hours * hourlyRate;

        // Display result
        $("#totalCost").text(`$${totalCost.toFixed(2)}`);
    });
});
