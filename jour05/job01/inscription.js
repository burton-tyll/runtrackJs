const user = 

$('button').click(checkForm)


/*Fonctions*/

function checkForm(){
	recupValeurs()
	verifPrenom(user)
}

function recupValeurs(){

	let nom = $('input[name=nom]').val()
	let prenom = $("input[name=prenom").val()
	let email = $("input[name=email]").val()
	let mdp = $("input[name=mdp]").val()
	let adresse = $('input[name=adresse]').val()
	let cp = $('input[name=codepostal]').val()
	
	//Stockage des valeurs dans un objet valeurs
	user.nom = nom;
	user.prenom = prenom;
	user.email = email;
	user.mdp = mdp;
	user.adresse = adresse;
	user.cp = cp;
}

function verifPrenom(user){
	if (user.prenom.length > 3){
		console.log(user)
	}
	else{
		console.log("nope")
	}
}