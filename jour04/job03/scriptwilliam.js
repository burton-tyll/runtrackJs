const select = $('#select');
const resultSection = $('#resultat');

fetch('pokemon.json')
	.then(response => response.json())
	.then(data => {
		const typesSet = new Set();

		data.forEach(pokemon => {
			pokemon.type.forEach(type => {
				typesSet.add(type);
			});
		});

		typesSet.forEach(type => {
			$('<option>', {
				value: type,
				text: type,
			}).appendTo(select)
		});
	})
	.catch(error => console.error('Erreur lors de la récupération des données : ', error));





function recupTypes(){

	fetch("pokemon.json")
	.then(response => response.json())
	.then(data => {
		const données = data;
		// console.log(données);

		const div = $('<div>');
		données.forEach(pokemon =>{
			const paragraph = $('<p>');
			paragraph.text(`type : ${pokemon.type}`).appendTo(div);
		});
		resultSection.append(div);
	});
}

const types = [];
recupTypes();
// alert(recupTypes());




