

const getTime = () => {
    const currentTime = new Date();

    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const html = `
    <p class="hours">${hours}</p>:
    <p class="minutes">${minutes}</p>:
    <p class="seconds">${seconds}</p>
    <div class="date">
        <span class="dayOfTheWeek"></span>
        <span class="day"></span>
        <span="month"></span=>
    </div>
    `
    document.querySelector('.clockTime').innerHTML = html;
}

setInterval(getTime, 1000);
