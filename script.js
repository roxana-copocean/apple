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

// Section 3  progress bar when scrolling
const macBookContent = document.querySelector('.section-3__content');
window.addEventListener('scroll', () => {
	if (window.pageYOffset + window.innerHeight >= macBookContent.offsetTop + macBookContent.offsetHeight / 2) {
		macBookContent.classList.add('change');
	}
});

// section 4 watches
let yDirection = 0;
let xDirection = 0;
const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');
const topControl = document.querySelector('.watch-control__top');
const botoomControl = document.querySelector('.watch-control__bottom');
const leftControl = document.querySelector('.watch-control__left');
const rightControl = document.querySelector('.watch-control__right');

document.querySelectorAll('.watch-control, controls a').forEach((control) => {
	control.addEventListener('click', (e) => {
		e.preventDefault();
	});
});
const hideControls = () => {
	if (yDirection === -280) {
		topControl.classList.add('hide-controls');
	} else {
		topControl.classList.remove('hide-controls');
	}
	if (yDirection === 280) {
		botoomControl.classList.add('hide-controls');
	} else {
		botoomControl.classList.remove('hide-controls');
	}
	if (xDirection === -280) {
		leftControl.classList.add('hide-controls');
	} else {
		leftControl.classList.remove('hide-controls');
	}
	if (xDirection === 280) {
		rightControl.classList.add('hide-controls');
	} else {
		rightControl.classList.remove('hide-controls');
	}
};

topControl.addEventListener('click', () => {
	watchCases.style.marginTop = `${(yDirection -= 70)}rem`;
	console.log(yDirection);
	hideControls();
});
botoomControl.addEventListener('click', () => {
	watchCases.style.marginBottom = `${(yDirection += 70)}rem`;
	hideControls();
});
leftControl.addEventListener('click', () => {
	watchBands.style.marginRight = `${(xDirection -= 70)}rem`;

	hideControls();
});
rightControl.addEventListener('click', () => {
	watchBands.style.marginRight = `${(xDirection += 70)}rem`;
	hideControls();
});
