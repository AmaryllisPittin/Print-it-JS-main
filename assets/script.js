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

/*****ul create element*******/
let dotsContainer = document.querySelector('.dots');
let ulElement = document.createElement('ul');

let parentElement = document.querySelector('ul');
let childElements = parentElement.querySelectorAll('li');

numberOfPoints = slides.length;

for (let i=0; i < numberOfPoints; i++) {
	let liElement = document.createElement('li');
	liElement.classList.add('dot');
	ulElement.appendChild(liElement);
}

dotsContainer.appendChild(ulElement);
ulElement.classList.add('dots');

let firstLi = ulElement.querySelector('li:first-child');
firstLi.classList.add('dot_selected');

console.log("Nombre de petits chibidis:", numberOfPoints);

/*****Click for carousel arrows***/
let currentIndex = 0;
const TotalSlides = slides.length;

const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.getElementById("banner");

arrowRight.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % TotalSlides;
	const currentSlide = slides[currentIndex];
	const ImageTagLine = currentSlide.tagLine;

	bannerImg.innerHTML = `<img src=${currentSlide.image} alt="Slide ${currentIndex + 1}"> <p>${currentSlide.tagLine}</p>`;
});
