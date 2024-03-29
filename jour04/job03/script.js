// Sélection des éléments HTML avec jQuery et stockage dans des variables
const select = $("#select");
var pokémons;
let valeurid;
let valeurnom;
let valeurtype;

// Utilisation de l'API Fetch pour récupérer les données du fichier JSON
fetch("pokemon.json")
	.then(response => response.json())
	.then (data => {
		pokémons = data;
		// Création d'un ensemble (Set) pour stocker les types de Pokémon uniques
		types = new Set()
		// Parcours de chaque objet Pokémon dans les données
		data.forEach(pokemon => {
			// Parcours de chaque type du Pokémon
			pokemon.type.forEach(type => {
				// Ajout du type à l'ensemble
				types.add(type)
			})
		})
		// Parcours de chaque type unique dans l'ensemble
		types.forEach(type => {
			// Création d'une nouvelle option pour l'élément de sélection
			$('<option>', {value: type, text: type}).appendTo(select)// Valeur de l'option et Texte affiché de l'option
		})
		$("#button").click(test)
	})
	// Gestion des erreurs
	.catch (error => console.error("Erreur dans la récupération des données: ", error))


	//--------------FONCTIONS-------------------

	

	function recupEntrée(){
		valeurid = $('input[name="id"]').val();
		valeurnom = $('input[name="nom"]').val();
		valeurtype = $('select').val();
		valeurs = {
			id: valeurid, 
			name: valeurnom, 
			type: valeurtype
		}
	}

	function extractPokemons(){
		pokémons.forEach(pokemon => {
			console.log(pokemon)
		})
	}

	function comparer(){
		pokémons.forEach(pokemon => {
			if (pokemon.id === parseInt(valeurid)){
				return true
			}
			else{
				return false;
			}
		})
	}

	function test(){
		recupEntrée()
		comparer()
		console.log(valeurs)
	}



		// if (pokémons.some(pokemon => pokemon.id === parseInt(valeurid))){
		// 	console.log("yes")
		// }










