$(document).ready(function(){
	//lorsque je clique sur une image la fonction s'exécute
	$("img").click(function(){
		//Si l'image cliquée correspond a l'id vide, je permutte la case vide et la case cliquée (fonctionne seulement en ligne)
		if ($(this).next().attr("id") === "vide"){
			$("#vide").insertBefore($(this));
		} else if ($(this).prev().attr("id") === "vide"){
			$("#vide").insertAfter($(this));
		}
		//Même chose pour les colonnes
		if ($(this).children("#vide").hasClass("3")){
			alert("non");
		} else if ($(this).next("#vide").hasClass("3")){
			
		}

	});
});