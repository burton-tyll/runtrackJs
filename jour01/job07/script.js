let estjourférié = false;


function jourTravaille(date){
	for (i=0; i < joursfériés.length; i++){
		if (date.getTime()==joursfériés[i].getTime()){
			console.log("Le "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+" est un jour férié");
			estjourférié==true;
			break;
		}
	}

	if (!estjourférié){
		if (date.getDay()===0 || date.getDay()===6){
			console.log("Non "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+" est un week-end");
		}
	}
	else{
		console.log("Oui "+date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+" est un jour travaillé");
	}
}


joursfériés = [
	new Date(2024, 1, 1), 
	new Date(2024, 4, 1), 
	new Date(2024, 5, 1),
	new Date(2024, 5, 8),
	new Date(2024, 5, 9),
	new Date(2024, 5, 20),
	new Date(2024, 7, 14),
	new Date(2024, 8, 15),
	new Date(2024, 1, 11),
	new Date(2024, 11, 11),
	new Date(2024, 12, 25)
	];

date = new Date(2024, 4, 1);

jourTravaille(date);







// Lundi 1er janvier : Jour de l’An
// Lundi 1er avril : Lundi de Pâques
// Mercredi 1er mai : Fête du Travail
// Mercredi 8 mai : Victoire 1945
// Jeudi 9 mai : Ascension
// Lundi 20 mai : Lundi de Pentecôte
// Dimanche 14 juillet : Fête nationale
// Jeudi 15 août : Assomption
// Vendredi 1er novembre : Toussaint
// Lundi 11 novembre : Armistice 1918
// Mercredi 25 décembre : Noël
