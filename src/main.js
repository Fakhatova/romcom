//Create variables targetting the relevant DOM elements here 👇


var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var newRandomCoverBtn = document.querySelector('.random-cover-button');
var mainCover = document.querySelector('.main-cover');
var makeOwnCoverBtn = document.querySelector('.make-new-button');
var formField = document.querySelector('.view .form-view .hidden')




///// VARIABLE FOR INPUT FIELDS///////


/////////// GLOBAL VARIABLES //////////
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover()

/////////////////////////////////////


/////// EVENT LISTENERS👇//////

newRandomCoverBtn.addEventListener('click', showRandomCover)
makeOwnCoverBtn.addEventListener('click', showForm)
///////////////////////////////

////// EVENT HANDLERS AND OTHER FUNCTIONS👇///////////

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}


function getRandomCover() {
  coverImage.src = covers[getRandomIndex(covers)];
  coverTitle.innerText = titles[getRandomIndex(titles)];
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}
getRandomCover()

function showRandomCover() {
  getRandomCover()

}
function showForm() {
  mainCover.classList.add('hidden')
  console.log("It's hidden!")
  formField.classList.remove('hidden')
  console.log("It's there!")
}
