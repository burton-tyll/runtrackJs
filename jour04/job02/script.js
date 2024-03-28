function jsonValueKey(chaine, key){
	const jsonData = JSON.parse(chaine);

	if (key in jsonData) {
		return(jsonData[key]);
	}
	else {
		return("La clé n'est pas valide.");
	}
}

let laplateforme = '{ "name": "LaPlateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff": "11", "creation": "2019" }';
console.log(jsonValueKey(laplateforme, "city"))