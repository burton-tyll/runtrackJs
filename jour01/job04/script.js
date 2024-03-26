let annee = 2025;

function bisextile(annee){
	if (annee % 4===0 && (annee%100!==0 || annee%400===0)){
		return true;
	}
	else{
		return false;
	}
}


alert(bisextile(annee));