function clickCount(){
	compteur++;
	count = document.getElementById("compteur");
	count.textContent = compteur;
}

let compteur = 0;

button.addEventListener("click", clickCount);