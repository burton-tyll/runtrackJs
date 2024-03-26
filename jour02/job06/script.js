const combinaison = [];
const konami = ["x", "b", "a", "b", "y", "x"];
document.addEventListener("keydown", LaPlateforme);

function stylePage(){
	//On ajoute un header
	const header = document.createElement("header");
	//On créer une div et on lui assigne un id
	const div1 = document.createElement("div");
	div1.id = "img";
	const image = document.createElement("img");
	div1.appendChild(image);
	//On ajoute notre div au header
	header.appendChild(div1);
	//On ajoute le header au body
	document.body.appendChild(header);
	//A présent on ajoute le main et un titre
	main = document.createElement("main");
	h1 = document.createElement("h1");
	document.body.appendChild(main);
	main.appendChild(h1);
	//On configure le texte du titre et on l'affiche
	texte = document.createTextNode("Bienvenue sur LaPlateforme.io");
	h1.appendChild(texte);
	//On passe au style
	document.body.style.margin = "0";
	image.setAttribute("src", "https://intra.laplateforme.io//assets/img/logoplateforme.png");
	image.style.width = '100px';
	image.style.height = '100px';
	header.style.background = 'blue';
	h1.style.color = '#020E64';
	h1.style.textAlign = 'center';
}


function LaPlateforme(event){
	touche = event.key.toLowerCase();
	combinaison.push(touche);

	if (combinaison.join('') == konami.join('')){
		stylePage();
		document.removeEventListener("keydown", LaPlateforme);
		return;
	}
	else if (combinaison.length > 6){
		alert("Veuillez entrer une combinaison correcte!");
		combinaison.splice(0, combinaison.length);
	}
}
