function showHide(){

	let articlePresent = document.querySelector("article");

	if (!articlePresent){
		//On créé l'élément article
		const article = document.createElement("article");
		//on créé le texte que l'on souhaite ajouter à l'article
		const texte = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.");
		//On ajoute le texte à l'article
		article.appendChild(texte);
		//On déclare une variable bouton pour la réutiliser après
		let monbouton = document.getElementById("button");
	
		//On se sert de insertBefore pour insérer l'article avant le bouton
		document.body.insertBefore(article, monbouton);
	}

	else{
		articlePresent.remove();
	}
}

let bouton = document.getElementById("button");

bouton.addEventListener("click", showHide);


