let startTime, updatedTime, difference, tInterval;
let running = false;
const display = document.getElementById('stopwatch');

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1);
        running = true;
    }
}

function stopStopwatch() {
    if (running) {
        clearInterval(tInterval);
        running = false;
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    display.innerHTML = "00:00:00";
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);
    display.innerHTML = `${pad(minutes)}:${pad(seconds)}.${pad(milliseconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
