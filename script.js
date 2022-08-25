function toggleClass() {
	const body = document.querySelector('body');
	body.classList.toggle('light');

}

const deg = 6;

 const hr = document.querySelector("#hr");
 const mn = document.querySelector("#mn");
 const sc = document.querySelector("#sc");

 setInterval (() => {                   /* setInterval для постоянной работы часов*/
 	let day = new Date();
 let hh = day.getHours() * 30;
 let mm = day.getMinutes() * deg;
 let ss = day.getSeconds() * deg; /* Для поворота стрелки */

 hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`; /*Делим на 12 так как 12 часов */ 
 mn.style.transform = `rotateZ(${(mm)}deg)`;
 sc.style.transform = `rotateZ(${(ss)}deg)`;
 })

 