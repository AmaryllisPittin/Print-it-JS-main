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

/*****CLASS for SLIDES*****/

const dotsContainer = document.querySelector('.dots');
const imgBanner = document.querySelector(".banner__all-img");
const numberOfPoints = slides.length;
let currentIndex = 0;

slides.forEach((slide, index) => {
	const imgElement = document.createElement('img');
	imgElement.src = slide.image;
	imgElement.id = index;
	imgElement.classList.add('banner-img');
	imgElement.alt = `Slide ${index + 1}`;

	imgBanner.appendChild(imgElement);

});

updateCarouselContent();

function updateCarouselContent() {
	let activeIndex = 0;
	imgBanner.innerHTML = '';
	const firstImg = document.createElement('img');
	firstImg.src = slides[activeIndex].image;
	firstImg.classList.add('banner-img');
	firstImg.alt = `Slide ${activeIndex + 1}`;

	imgBanner.appendChild(firstImg);
}

/*****bullet create element*******/

const dotElements = [];

function createDots() {
	for (let i=0; i < numberOfPoints; i++) {
		let bulletElement = document.createElement("a");
		bulletElement.href = '#';
		bulletElement.classList.add("dot");
		dotsContainer.appendChild(bulletElement);
		dotElements.push(bulletElement);
	}
}

function updateDots() {
	dotElements.forEach(dot =>  {
		dot.classList.remove('dot_selected');
	});
	dotElements[currentIndex].classList.add('dot_selected');
}

function changeSlide(index) {
	currentIndex = index;

	updateDots();
}

createDots();

const firstDot = document.querySelector(".dot:first-of-type");
if (firstDot) {
firstDot.classList.add("dot_selected");
}



/*****Click for carousel arrows***/
const TotalSlides = slides.length;

const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector(".banner__all-img");
const startTagLine = document.querySelector('.banner-img-tagLine');

arrowRight.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % TotalSlides;
	const currentSlide = slides[currentIndex];
	const ImageTagLine = currentSlide.tagLine;
	dotIndex = (dotIndex + 1) % numberOfPoints;
	changeSlide(currentIndex);

	bannerImg.innerHTML = `<img src=${currentSlide.image} alt="Slide ${currentIndex + 1}" class="banner-img"> <p>${ImageTagLine}</p>`;
	if (startTagLine) {
		startTagLine.remove();
	}
});

const arrowLeft = document.querySelector('.arrow_left');
let dotIndex = dotElements;

arrowLeft.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + TotalSlides) % TotalSlides;
	const currentSlide = slides[currentIndex];
	const ImageTagLine = currentSlide.tagLine;
	dotIndex = (dotIndex - 1 + numberOfPoints) % numberOfPoints;
	changeSlide(currentIndex);

	bannerImg.innerHTML = `<img src=${currentSlide.image} alt="Slide ${currentIndex - 1}" class="banner-img"> <p>${ImageTagLine}</p>`;
	startTagLine.remove();
})


