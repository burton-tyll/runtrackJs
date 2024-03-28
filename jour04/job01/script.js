$("#button").click(function(){
	fetch("expression.txt")
	.then(response => response.text())
	.then(data => console.log(data))
	.catch(error => console.error("Une erreur est survenue", error));
})
