const year = document.getElementById('year');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentyear = new Date().getFullYear();
const nextyear =  new Date(`january 01 ${currentyear + 1 } 00:00:00`);

function countDown(){
    const currentTime = new Date();
    const diff = nextyear - currentTime;

    const s = Math.floor(diff / 1000) % 60;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    console.log(h);  
    seconds.innerHTML = (s < 10) ? '0' + s : s ;
    minutes.innerHTML = (m < 10) ? '0' + m : m ;
    hours.innerHTML = (h < 10) ? '0' + h : h ;
    days.innerHTML = (d < 10) ? '0' + d : d ;
}
countDown();

setInterval(countDown, 1000);

year.innerHTML = nextyear.getFullYear();
