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


//------------EVENEMENT ONCLICK- SOUMISSION FORMULAIRE-------------------------//
function verifForm(user){
	verifMail(user)
	if (verifMail(user) === true && verifDomaine(user) === true){
		console.log(user)
	}
}

$('button').click(function(event){
	event.preventDefault()
	prenom = $('input[name=prenom]').val()
	nom = $('input[name=nom]').val()
	email = $('input[name=email]').val()
	mdp = $('input[name=mdp]').val()
	user.prenom = prenom
	user.nom = nom
	user.email = email
	user.mdp = mdp
	verifForm(user)
})

