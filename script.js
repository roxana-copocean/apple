// slideshow
let counter = 1;
const slideshowDivs = () => {
	for (let i = 1; i <= 5; i++) {
		const div = document.createElement('div');
		div.style.backgroundImage = `url(imgs/slideshow/section-1-bg-${i}.jpg)`;
		i === 1 && div.classList.add('change');

		document.querySelector('.slideshow').appendChild(div);
	}
};

slideshowDivs();

const divs = document.querySelectorAll('.slideshow div');

const slideShow = () => {
	setInterval(() => {
		counter++;
		const div = document.querySelector('.slideshow .change');
		div.classList.remove('change');
		if (counter < divs.length) {
			div.nextElementSibling.classList.add('change');
		} else {
			divs[0].classList.add('change');
			counter = 1;
		}
	}, 10000);
};

slideShow();

// cube
let yMove = 20;
let xMove = 0;
let zMove = 0;
let interval;
let cubeRotating = true;
const cube = document.querySelector('.cube');
const playCube = () => {
	if (cubeRotating) {
		interval = setInterval(() => {
			cube.style.transform = `rotateY(${yMove++}deg) rotateX(${xMove}deg) rotateZ(${zMove}deg)`;
		}, 50);
	} else {
		clearInterval(interval);
	}
};
playCube();

// controls
document.querySelector('.top-x-control').addEventListener('click', () => {
	cube.style.transform = `rotateX(${(xMove += 30)}deg) rotateY(${yMove}deg) rotateZ(${zMove}deg)`;
});
document.querySelector('.bottom-x-control').addEventListener('click', () => {
	cube.style.transform = `rotateX(${(xMove -= 30)}deg)  rotateY(${yMove}deg) rotateZ(${zMove}deg)`;
});
document.querySelector('.left-y-control').addEventListener('click', () => {
	cube.style.transform = `rotateX(${xMove}deg)  rotateY(${(yMove -= 30)}deg) rotateZ(${zMove}deg)`;
});
document.querySelector('.right-y-control').addEventListener('click', () => {
	cube.style.transform = `rotateX(${xMove}deg)  rotateY(${(yMove += 30)}deg) rotateZ(${zMove}deg)`;
});
document.querySelector('.top-z-control').addEventListener('click', () => {
	cube.style.transform = `rotateX(${xMove}deg)  rotateY(${yMove}deg) rotateZ(${(zMove -= 30)}deg)`;
});
document.querySelector('.bottom-z-control').addEventListener('click', () => {
	cube.style.transform = `rotateX(${xMove}deg)  rotateY(${yMove}deg) rotateZ(${(zMove += 30)}deg)`;
});

document.querySelector('.controls').addEventListener('mouseover', () => {
	cubeRotating = false;
	playCube();
});
document.querySelector('.controls').addEventListener('mouseout', () => {
	cubeRotating = true;
	playCube();
});
