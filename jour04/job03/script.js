const select = $('#select');
const resultSection = $('#resultat');

fetch('pokemon.json')
	.then(response => response.json())
	.then(data => {
		const typesSet = new Set();
		typeSet.add(data);
		console.log(typesSet);
	})


