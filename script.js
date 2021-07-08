const timePlate = document.querySelector("#timePlate");
const TimeFormate = document.querySelector("#timeFormat");

function digitalClock() {
    let getTime = new Date();
    let formatStyle = 'AM';
    let hours = getTime.getHours();
    let minutes = getTime.getMinutes();
    let second = getTime.getSeconds();

    if(hours === 0){
        hours = 12;
    }
    if(hours > 12){
        hours = (hours - 12);
        formatStyle = 'PM'
    }

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    second = second < 10 ? '0' + second : second;

    let clock = `${hours}:${minutes}:${second}`;
    timePlate.innerText = clock;
    TimeFormate.innerText = formatStyle;
    setInterval(digitalClock, 1000)
}

digitalClock();