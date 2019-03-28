var rainButton = document.getElementById('NyanButton');

rainButton.addEventListener("click", rain);

function rain() {
	var nyanImage = document.createElement("img");
	nyanImage.src = "nyancat.png";
	document.body.appendChild(nyanImage);
}