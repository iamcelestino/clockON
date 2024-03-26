
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

//TIMER

const form = document.querySelector('form');

form.addEventListener('submit', event => {

    event.preventDefault();
    const hours = +form.hours.value;
    const minute = +form.minutes.value;
    const second = +form.seconds.value;

    localStorage.setItem('hour', hours);
    localStorage.setItem('min', minute);
    localStorage.setItem('sec', second);
})

const Timer = (hour, min, sec) => {  
    
    document.querySelector('.timer .hour').textContent = hour;
    document.querySelector('.min').textContent = min;
    document.querySelector('.sec').textContent = hour;

    setInterval(() => {
        sec--;
        document.querySelector('.sec').textContent = sec;
        if (sec === 0) {
            sec = 59;
            sec--;
            min--;
            document.querySelector('.min').textContent = min;
        } 
        else if (min === 0) {
            min = 59;
            min--;
            hour--;
            document.querySelector('.timer .hour').textContent = hour;
        }
        else if ((sec === 0) && (min === 0) && (hour === 0)) {
            sec = 0;
            min = 0;
            hour = 0;
            document.querySelector('.sec').textContent = sec;
            document.querySelector('.min').textContent = min;
            document.querySelector('.timer .hour').textContent = hour;
        }
    }, 1000);
}

const hour = +localStorage.getItem('hour');
const min = +localStorage.getItem('min');
const sec = +localStorage.getItem('sec');

document.querySelector('.start').addEventListener('click', () => {
    Timer(hour, min, sec);
});
