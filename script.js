// Get the start date and time (4/29/2024 at 6:00 AM)
const startDate = new Date('2024-04-29T06:00:00');

function updateElapsedTime() {
    const currentTime = new Date();
    const elapsedTime = currentTime - startDate; // Time difference in milliseconds

    // Convert milliseconds to hours, minutes, and seconds
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Display the elapsed time in hhh:mm:ss format
    const formattedTime = `${hours.toString().padStart(3, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('elapsed-time').textContent = `Tiempo de ayuno Feli: ${formattedTime}`;
}

// Update the elapsed time every second
setInterval(updateElapsedTime, 1000);
