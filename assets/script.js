const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.querySelector('.arrow_left').addEventListener('click', () => {
	console.log("Vous avez cliqué hihi")
})

document.querySelector('.arrow_right').addEventListener('click', () => {
	console.log("Vous avez cliqué haha")
})

/*****ul create element*******/
let dotsContainer = document.querySelector('.dots');
let ulElement = document.createElement('ul');

let parentElement = document.querySelector('ul');
let childElements = parentElement.querySelectorAll('li');
let numberOfPoints = childElements.length;

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
