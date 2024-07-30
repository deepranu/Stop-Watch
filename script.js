// Variables to track the start time, updated time, time difference, and interval ID
let startTime, updatedTime, difference, intervalID;
let isRunning = false;

// Reference to the stopwatch display element
const stopwatchDisplay = document.getElementById('stopwatch');

/**
 * Function to start the stopwatch
 */
function startStopwatch() {
    if (!isRunning) {
        // Record the start time
        startTime = new Date().getTime();
        // Set an interval to update the time display every millisecond
        intervalID = setInterval(updateTime, 10);
        isRunning = true;
    }
}

/**
 * Function to stop the stopwatch
 */
function stopStopwatch() {
    if (isRunning) {
        // Clear the interval to stop updating the time
        clearInterval(intervalID);
        isRunning = false;
    }
}

/**
 * Function to reset the stopwatch
 */
function resetStopwatch() {
    // Clear the interval to stop updating the time
    clearInterval(intervalID);
    isRunning = false;
    // Reset the display to 00:00:00
    stopwatchDisplay.innerHTML = "00:00:00";
}

/**
 * Function to update the stopwatch time display
 */
function updateTime() {
    // Get the current time
    updatedTime = new Date().getTime();
    // Calculate the time difference
    difference = updatedTime - startTime;
    
    // Convert time difference to minutes, seconds, and milliseconds
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);
    
    // Update the display with formatted time
    stopwatchDisplay.innerHTML = `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

/**
 * Helper function to pad numbers with a leading zero if necessary
 * @param {number} number - The number to pad
 * @returns {string} - The padded number as a string
 */
function pad(number) {
    return number < 10 ? '0' + number : number;
}
