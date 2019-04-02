var rainButton = document.getElementById('NyanButton');
var nyanImage = document.createElement("img");
nyanImage.src = "nyancat.png";
nyanImage.id = "idNyanCat";
nyanImage.width = 150;
nyanImage.style.position = 'absolute';
var top = 0;
var bottom = 0;
var left = 0;
var right = 0; 

rainButton.addEventListener("click", addBackground);
rainButton.addEventListener("click", moveCat);

function addBackground() {
  document.body.style.backgroundImage = "url('background.png')";
  /*document.getElementById("NyanButton").style.display = "none";*/
}

var dogIcon = document.createElement ("img");
dogIcon.src = "dogicon.png";

function moveCat() {
	document.body.appendChild(nyanImage);
	document.getElementById("idNyanCat").style.animation = "catRain 3s";
}