const user = {};
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


$('button').click(checkForm)


/*Fonctions*/

function checkForm(){
	recupValeurs()
	verifNom(user)
	verifPrenom(user)
	verifMail(user)
	verifMdp(user)
}

function recupValeurs(){

	let nom = $('input[name=nom]').val().toLowerCase()
	let prenom = $("input[name=prenom]").val().toLowerCase()
	let email = $("input[name=email]").val().toLowerCase()
	let mdp = $("input[name=mdp]").val()
	let mdp2 = $("input[name=mdp2]").val()
	let adresse = $('input[name=adresse]').val().toLowerCase()
	let cp = $('input[name=codepostal]').val()
	
	//Stockage des valeurs dans un objet valeurs
	user.nom = nom;
	user.prenom = prenom;
	user.email = email;
	user.mdp = mdp;
	user.mdp2 = mdp2
	user.adresse = adresse;
	user.cp = cp;
}

function verifNom(user){
	//On vérifie que le nom ne contienne que des lettres
	let hasnumbers = /\d/.test(user.nom)
	//On vérifie qu'il n'y ai pas de caractères spéciaux hormis les accents et traits d'union
	let hasSpecialCaracteres = /[^a-zA-ZÀ-ÖØ-öø-ÿ-]/.test(user.nom)
	if (!hasnumbers && !hasSpecialCaracteres){
		$('input[name=nom]').next('.erreurNom').remove()
		return true
	}
	else{
		//On créer l'élément erreur dans le formulaire
		let erreurNom = $('input[name=nom]').next('.erreurNom')
		if (erreurNom.length === 0){
			$('input[name=nom]').after('<p class="erreurNom">Votre nom ne doit contenir que des lettres avec ou sans accent!</p>')
		}
		return false
	}
}

function verifPrenom(user){
	//ici on vérifie que le prénom ne contienne que des lettres
	let hasnumbers = /\d/.test(user.prenom)
	//on vérifie qu'il n'y ai pas de caractères spéciaux hormis les accents et traits d'union
	let hasSpecialCaracteres = /[^a-zA-ZÀ-ÖØ-öø-ÿ-]/.test(user.prenom)
	if (!hasnumbers && !hasSpecialCaracteres){
		$('input[name=prenom]').next('.erreurPrenom').remove()
		return true
	}
	else{
		//on créer l'élément erreur dans le formulaire
		let erreurPrenom = $('input[name=prenom]').next('.erreurPrenom')
		if (erreurPrenom.length === 0){
			$('input[name=prenom]').after('<p class="erreurPrenom">Votre prénom ne doit contenir que des lettres avec ou sans accent!</p>')
		}
		else{
			return false
		}
	}
}

function verifMail(user){
	let isMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)
	if (isMail){
		$('input[name=email]').next('.erreurEmail').remove()
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

function verifMdp(user){
	mdpValide = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(user.mdp)
	if (mdpValide){
		if (user.mdp === user.mdp2){
			$('input[name=mdp]').next('.erreurMdp').remove()
			console.log("yes")
			return true
		}
		else{
			let erreurMdp = $('input[name=mdp]').next('.erreurMdp')
			if (erreurMdp.length === 0){
				$('input[name=mdp]').after('<p class="erreurMdp">Les mots de passe ne correspondent pas</p>')
				return false
			}
			else{
				return false
			}
		}
	}
	else{
		console.error(`Votre mot de passe doit contenir au moins:
			8 caractères
			Une majuscule
			Une minuscule
			Un chiffre
			Un caractère spécial`)
		return false
	}
}
