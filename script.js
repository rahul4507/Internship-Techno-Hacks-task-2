document.addEventListener("DOMContentLoaded", function () {
    const countdownForm = document.getElementById("countdown-form");
    countdownForm.addEventListener("submit", startCountdown);
});

function startCountdown(event) {
    event.preventDefault();

    const hoursInput = parseInt(document.getElementById("hours").value) || 0;
    const minutesInput = parseInt(document.getElementById("minutes").value) || 0;
    const secondsInput = parseInt(document.getElementById("seconds").value) || 0;

    const initialTimeInSeconds = hoursInput * 3600 + minutesInput * 60 + secondsInput;

    let remainingTime = initialTimeInSeconds;

    function updateCountdown() {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        const hoursElement = document.getElementById("hours-output");
        const minutesElement = document.getElementById("minutes-output");
        const secondsElement = document.getElementById("seconds-output");

        hoursElement.textContent = formatTime(hours);
        minutesElement.textContent = formatTime(minutes);
        secondsElement.textContent = formatTime(seconds);

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            alert("Countdown complete!"); // Display an alert when countdown is done
        } else {
            remainingTime--;
        }
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
