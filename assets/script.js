const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dotsContainer = document.querySelector('.dots');
const imgBanner = document.querySelector(".banner__all-img");
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const startTagLine = document.querySelector('.banner-img-tagLine');

let currentIndex = 0;

function updateCarouselContent() {
	imgBanner.innerHTML = `<img src=${slides[currentIndex].image} alt="Slide ${currentIndex + 1}" class="banner-img">`;
	startTagLine.innerHTML = slides[currentIndex].tagLine;
}

function createDots() {
	for (let i=0; i < slides.length; i++) {
		let bulletElement = document.createElement("a");
		bulletElement.href = '#';
		bulletElement.classList.add("dot");
		dotsContainer.appendChild(bulletElement);
	}
}

function updateDots() {
	const dotElements = document.querySelectorAll('.dot');
	dotElements.forEach((dot, index) =>  {
		dot.classList.toggle('dot_selected', index === currentIndex);
	});
}

function changeSlide(direction) {
	if (direction === 'right') {
		currentIndex = (currentIndex + 1) % slides.length;
	} else {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	}
	updateCarouselContent();
	updateDots();
}

arrowRight.addEventListener('click', () => {
	changeSlide('right');
});

arrowLeft.addEventListener('click', () => {
	changeSlide('left');
});

createDots();
updateCarouselContent();
updateDots();