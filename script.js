// for 12 hours = 360 deg, so for 1 hr = 360/12 = 30 deg
// for 60 mins = 30deg, so for 1 min = 30/60 = 1/2 deg
// for 60sec = 360 deg, similarly for 1 sec = 6 deg

const deg = 6;

const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
	const day = new Date();
	let hh = day.getHours();
	let mm = day.getMinutes();
	let ss = day.getSeconds();

	let hhRotation = 30 * hh + mm / 2;
	let mmRotation = 6 * mm;
	let ssRotation = 6 * ss;

	hr.style.transform = `rotateZ(${hhRotation}deg)`;
	mn.style.transform = `rotateZ(${mmRotation}deg)`;
	sc.style.transform = `rotateZ(${ssRotation}deg)`;
}, 1000);
