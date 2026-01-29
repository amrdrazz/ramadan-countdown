let daysSpan = document.getElementById('days');
let hoursSpan = document.getElementById('hours');
let minutesSpan = document.getElementById('minutes');
let secondsSpan = document.getElementById('seconds');


let countdown = setInterval(()=>{
    let myDate = new Date;;
    let ramadanDate = new Date('2026-02-18T00:00:00');
    let deff = ramadanDate - myDate;
    let days = Math.floor(deff/(1000*60*60*24));
    let hours = Math.floor((deff % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((deff % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((deff % (1000*60)) / (1000));


    daysSpan.innerText = String(days).padStart(2,'0');
    hoursSpan.innerText = String(hours).padStart(2,'0');
    minutesSpan.innerText = String(minutes).padStart(2,'0');
    secondsSpan.innerText = String(seconds).padStart(2,'0');

}
,1000)