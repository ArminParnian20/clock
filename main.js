setInterval(()=>{
    let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');
let ampm = document.getElementById('ampm');
let h1 = document.getElementById('h');
let m1 = document.getElementById('m');
let s1 = document.getElementById('s');


let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();

let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');
let hr_dot = document.querySelector('.hr_dot');

hr_dot.style.transform = `rotate(${h * 30}deg)`;
min_dot.style.transform = `rotate(${m * 6}deg)`;
sec_dot.style.transform = `rotate(${s * 6}deg)`;




let am = h >= 12 ? "PM":"AM";
if(h > 12){h = h - 12;}

h = (h < 10) ? "0" + h : h;
m = (m < 10) ? "0" + m : m;
s = (s < 10) ? "0" + s : s;

hours.innerHTML = h + "<br/> <span>Hours</span>";
minutes.innerHTML = m + "<br/> <span>Minutes</span>";
seconds.innerHTML = s + "<br/> <span>Seconds</span>";
ampm.innerHTML = am;

h1.style.strokeDashoffset = 440 - (440 * h) / 12;
m1.style.strokeDashoffset = 440 - (440 * m) / 60;
s1.style.strokeDashoffset = 440 - (440 * s) / 60;

 
},1000)