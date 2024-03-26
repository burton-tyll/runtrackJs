function citation(){
	//On récupère l'élément citation qui est un article
	let citation = document.getElementById("citation");
	//Si l'élément est présent on récupère son texte
	if (citation){
		let texte = citation.querySelector("p").textContent;
		console.log(texte);
	}
} 
