window.onload = function() {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let appendMinutes = document.getElementById("minutes");
    let appendSeconds = document.getElementById("seconds");
    let appendTens = document.getElementById("tens");
    let startButton = document.getElementById("start-button");
    let stopButton = document.getElementById("stop-button");
    let restartButton = document.getElementById("reset-button");
    let interval;

    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens; 
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '00';
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '00';
        }
    };

    startButton.addEventListener("click", () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    });

    stopButton.addEventListener("click", () => {
        clearInterval(interval);
    });

    restartButton.addEventListener("click", () => {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        minutes = 0;
        appendMinutes.innerText = '00';
        appendSeconds.innerText = '00';
        appendTens.innerText = '00';
    });
};
