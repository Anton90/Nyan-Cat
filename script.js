var rainButton = document.getElementById('NyanButton');
var nyanImage = document.createElement("img");
nyanImage.src = "nyancat.png";
nyanImage.id = "idNyanCat";
nyanImage.width = 150;
nyanImage.style.position = 'absolute';

rainButton.addEventListener("click", addBackground);
rainButton.addEventListener("click", moveCat);

function addBackground() {
  document.body.style.backgroundImage = "url('background.png')";
}

function moveCat() {
	document.body.appendChild(nyanImage);
	document.getElementById("idNyanCat").style.animation = "catRain 4s";
}

    
