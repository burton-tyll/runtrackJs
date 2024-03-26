
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//On récupère la saisie de l'utilisateur
document.addEventListener("keydown", function(event){
	//on récupère la touche enfoncée par l'utilisateur
	let touche = event.key.toLowerCase();
	//on récupère le TextArea
	let textarea = document.getElementById("keylogger");
	if (alphabet.includes(touche)){
		if (document.activeElement === textarea){
			textarea.value += touche;
		}
		else{
			textarea.value += touche;
		}
	}
	else{
		textarea.value = textarea.value.split(-1);
	}
});
