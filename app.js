const clockBox = document.querySelector('#clock');
const dateBox = document.querySelector('#date');


function displayTime() {
    
    const rightNow = new Date();

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const year = rightNow.getFullYear();
    const month = months[rightNow.getMonth()];
    const date = rightNow.getDate();
    const day = days[rightNow.getDay()];

    const formattedDate = `${day},&nbsp; ${date}&nbsp; ${month}&nbsp; ${year}`;

    let hours = rightNow.getHours();
    let amPm = hours >= 12 ? 'PM' : 'AM'
    hours = hours % 12;

    let minutes = rightNow.getMinutes();
    let seconds = rightNow.getSeconds();


    clockBox.innerHTML = `
            <p id="hours" title="Hours"> ${addZero(hours)} </p>
            <span id="dots">:</span>
            <p id="minutes" title="Minutes"> ${addZero(minutes)} </p>
            <span id="dots">:</span>
            <p id="seconds" title="Seconds"> ${addZero(seconds)} </p>
            <p id="am-pm" title="AM/ PM"> ${amPm} </p>
    `;

    dateBox.innerHTML = `${formattedDate}`

};


function addZero(n) {
    return (n < 10 ? '0' : '') + n;
};

setInterval(displayTime, 1000);










