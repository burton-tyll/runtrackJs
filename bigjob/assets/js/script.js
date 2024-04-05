const user = {}

//---------------------------Vérifier EMAIL-----------------------------------//
function verifMail(user){
	let isMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)
	if (isMail){																									
		$('input[name=email]').next('.erreurEmail').remove()
		verifDomaine(user)
		return true
	}
	else{
		let erreurEmail = $('input[name=email]').next('.erreurEmail')
		if (erreurEmail.length === 0){
			$('input[name=email]').after('<p class="erreurEmail">Votre adresse email est invalide</p>')
			return false
		}
		else{
			return false
		}
	}
}

//------Verifier Nom De Domaine---//
function verifDomaine(user){
	let domaine = user.email.replace(/.*@/, "")
	let laPlateforme = 'laplateforme.io'

	if (laPlateforme.includes(domaine)){
		return true
	}
	else{
		return false
	}
}

//----------Vérification du formulaire-------------//

function verifForm(user){
	verifMail(user)
	if (verifMail(user) === true && verifDomaine(user) === true){
		return true
	}
	else{
		return false
	}
}


//------------EVENEMENT ONCLICK- SOUMISSION FORMULAIRE INSCRIPTION-------------------------//

$('.inscription').click(function(event){
	event.preventDefault()
	prenom = $('input[name=prenom]').val()
	nom = $('input[name=nom]').val()
	email = $('input[name=email]').val()
	mdp = $('input[name=mdp]').val()
	statut = "utilisateur"
	user.prenom = prenom
	user.nom = nom
	user.email = email
	user.mdp = mdp
	user.statut = statut
	verifForm(user)
})

//------------EVENEMENT ONCLICK- SOUMISSION FORMULAIRE CONNEXION-------------------------//

$('.connexion').click(function(event){
	event.preventDefault()
	email = $('input[name=email]').val()
	mdp = $('input[name=mdp]').val()
	user.email = email
	user.mdp = mdp
	existingUser(user)
})

//-----------------Récupération statut utilisateur--------------------------//

function existingUser(user){
	if (verifForm(user) === true){
		return fetch('../js/users.json')
			.then(response => response.json())
			.then(data => {
				jUsers = data;
				for (const jUser of data){
					if (jUser.email == user.email && jUser.mdp == user.mdp){
						redirection(jUser)
						return jUser
					}
				}
				console.log('Il y a une erreur dans votre adresse mail ou votre mot de passe')
			})
	}
	else{
		console.log('Les informations sont incorrectes')
		return false
	}
}

function redirection(jUser){
	if (jUser.statut == "admin"){
		document.location.href="admin.html"
	}
	else if(jUser.statut == "modo"){
		document.location.href="modo.html"
	}
	else if(jUser.statut == "user"){
		document.location.href="user.html"
	}
	else{
		return false
	}
}



